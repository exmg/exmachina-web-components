import {LitElement, html, PropertyValues} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {addListener, removeListener} from '@polymer/polymer/lib/utils/gestures.js';
import {afterNextRender} from '@polymer/polymer/lib/utils/render-status.js';

/**
 * Orientation map to limit dragging to horizontal or vertical.
 */
const orientationMap = {
  horizontal: {x: 1, y: 0},
  vertical: {x: 0, y: 1},
};

/**
 * The `<exmg-sortable>` element Enables drag and drop sorting of nodes in a list, table or any other set of
 * elements.
 *
 * !!! You should always handle @dom-order-change to update your local .items property to update sorted list properly
 *
 * ```html
 * <exmg-sortable item-selector="li" @dom-order-change="${this.myChangeHandler}">
 *  <ul>
 *     ${this.items.map((item) => {
 *       return html`
 *         <li>${item}</li>
 *       `;
 *     })}
 *  </ul>
 * </exmg-sortable>
 * ```
 */
@customElement('exmg-sortable')
export class SortableElement extends LitElement {
  @property({type: String, attribute: 'handle-selector'})
  public handleSelector?: string;

  @property({type: String, attribute: 'item-selector'})
  public itemSelector = 'li';

  /**
   * Optionally is possible to pass node instance which is host of sortable elements otherwise host for sortable elements
   * is `exmg-sortable` itself.
   * Note that style `sortableHostNode.style.position` will be set to `relative`
   */
  @property({type: Object})
  public sortableHostNode?: HTMLElement;

  @property({type: Boolean, attribute: 'animation-enabled'})
  public animationEnabled = false;

  @property({type: String, attribute: 'cloned-class'})
  public clonedClass = 'cloned';

  @property({type: String, attribute: 'dragged-class'})
  public draggedClass = 'dragged';

  @property({type: Object, attribute: 'animation-timing'})
  public animationTiming: any = {duration: 200, easing: 'ease-out'};

  @property({type: String})
  public orientation?: 'horizontal' | 'vertical';

  private dragRequestPending = false;
  private draggedElement?: HTMLElement;
  private draggedElementClone?: HTMLElement;
  private draggedElementOrigin?: HTMLElement;
  private sortableNodes: HTMLElement[] = [];
  private animatedElements: HTMLElement[] = [];
  private initialScrollTop = 0;
  private animationPromise?: Promise<void>;

  constructor() {
    super();

    /* Save function references */
    this.handleTrack = this.handleTrack.bind(this);
  }

  connectedCallback(): void {
    super.connectedCallback();
    addListener(this.getSortableHost(), 'track', this.handleTrack);
  }

  disconnectedCallback(): void {
    removeListener(this.getSortableHost(), 'track', this.handleTrack);
  }

  protected updated(changedProperties: PropertyValues): void {
    if (changedProperties.has('sortableHostNode')) {
      // reset listeners when sortableHostNode changed
      removeListener((changedProperties.get('sortableHostNode') as HTMLElement) || this, 'track', this.handleTrack);
      addListener(this.getSortableHost(), 'track', this.handleTrack);

      if (this.sortableHostNode) {
        // sortable host must have position relative
        this.sortableHostNode.style.position = 'relative';
      }
    }
  }

  /**
   * Get instance of sortable host.
   * By default it is `exmg-sortable` which can be overridden by property `sortableHostNode`
   */
  private getSortableHost(): HTMLElement {
    if (this.sortableHostNode) {
      return this.sortableHostNode;
    }

    return this;
  }

  /**
   * Tracks a pointer from touchstart/mousedown to touchend/mouseup. Note that the start state is fired following
   * the first actual move event following a touchstart/mousedown.
   */
  private handleTrack(e: Event): void {
    switch ((e as CustomEvent).detail.state) {
      case 'start':
        if (!this.dragRequestPending) {
          this.trackStart(e);
        }
        break;
      case 'track':
        this.trackMove(e);
        break;
      case 'end':
        if (this.animationPromise) {
          this.animationPromise.then(() => {
            afterNextRender(this, this.trackEnd);
          });
        } else {
          afterNextRender(this, this.trackEnd);
        }
        break;
    }
  }

  /**
   * Initialized a drag and drop sequence if a child node was clicked that matches the itemSelector property. If a
   * handleSelector is defined, a node matching this selector must be clicked instead.
   */
  private trackStart(e: Event): void {
    const handle = this.handleSelector;
    const eventPath: EventTarget[] = (e as any).path ? (e as any).path : e.composedPath();
    const targetElement = eventPath[0] as HTMLElement;

    /* Look for closest handle */
    if (handle && !targetElement.closest(handle)) {
      return;
    }

    this.updateUserSelectStyle('none');

    this.dragRequestPending = true;

    const selector = this.itemSelector;
    const node = targetElement.closest(selector) as HTMLElement;

    if (node) {
      e.preventDefault();

      this.draggedElement = node;
      this.sortableNodes = Array.from(this.getSortableHost().querySelectorAll(selector)) || [];
      this.draggedElementClone = this.createClone(node);
      this.draggedElementOrigin = node.nextSibling as HTMLElement;
      this.animatedElements = [];

      this.draggedElement!.classList.add(this.draggedClass);
    }
  }

  /**
   * Ends the drag and drop sequence.
   */
  private trackEnd(): void {
    if (!this.draggedElement) {
      return;
    }

    const updated = Array.from(this.getSortableHost().querySelectorAll(this.itemSelector));

    const sourceIndex = this.sortableNodes.indexOf(this.draggedElement);
    const targetIndex = updated.indexOf(this.draggedElement);

    if (sourceIndex !== targetIndex) {
      this.dispatchEvent(
        new CustomEvent('dom-order-change', {
          bubbles: true,
          composed: true,
          detail: {
            sourceIndex,
            targetIndex,
          },
        }),
      );
    }

    this.reset();

    this.dragRequestPending = false;
    this.updateUserSelectStyle('text');
  }

  /**
   * Moves the active node's clone to follow the pointer. The node that the clone intersects with (via hitTest) is
   * the insert point for updated sorting.
   */
  private trackMove(e: Event): void {
    e.preventDefault();

    if (!this.draggedElementClone) {
      return;
    }

    let {dx, dy} = (e as any).detail;
    const scrollTop = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop);

    if (this.orientation) {
      dx = dx * orientationMap[this.orientation].x;
      dy = dy * orientationMap[this.orientation].y;
    }

    /* Work around for issue with first element being party offscreen when drag start */
    dy = dy - (this.initialScrollTop - scrollTop);

    Object.assign(this.draggedElementClone!.style, {
      transform: `translate3d(${dx}px, ${dy}px, 0)`,
    });

    const target = this.hitTest(this.draggedElementClone!, this.sortableNodes)[0];
    if (
      // if clone intersects with a valid target,
      target &&
      // other than its own origin,
      target !== this.draggedElement &&
      // and the target isn't currently animating, which causes false hit tests,
      !this.isAnimating(target)
    ) {
      this.insertAtTarget(this.draggedElement!, target);
    }
  }

  private updateUserSelectStyle(userSelect: 'text' | 'none'): void {
    /**
     * Firefox bug fix: when dragging elements in firefox, closest text also getting selected
     */
    this.style.userSelect = userSelect;
    (this.style as any).MozUserSelect = userSelect;
    // @ts-ignore
    this.style.msUserSelect = userSelect;
    this.style.webkitUserSelect = userSelect;
  }

  /**
   * Fast and simple hit test to check whether the center of a node intersects with the rectangle of any of the
   * given targets. Returns an array of matches.
   *
   * @param {HTMLElement} node
   * @param {Array} targets
   * @return {Array<HTMLElement>} matches
   */
  private hitTest(node: HTMLElement, targets: HTMLElement[]): HTMLElement[] {
    const {left: l, top: t, width: w, height: h} = node.getBoundingClientRect();
    const x = l + w / 2;
    const y = t + h / 2;

    return targets.filter((item) => {
      const {left, right, top, bottom} = item.getBoundingClientRect();
      return !(x < left || x > right || y < top || y > bottom);
    });
  }

  /**
   * Returns a boolean indicating whether the node is currently in an animation.
   *
   * @param {HTMLElement} node
   * @returns {boolean} isAnimating
   */
  private isAnimating(node: HTMLElement): boolean {
    return this.animatedElements.indexOf(node) !== -1;
  }

  private reset(): void {
    if (this.draggedElementClone !== undefined && this.draggedElementClone.parentNode !== null) {
      this.draggedElementClone.parentNode.removeChild(this.draggedElementClone);
    }

    if (this.draggedElement && this.draggedElement.parentNode && this.draggedElementOrigin) {
      this.draggedElement.classList.remove(this.draggedClass);
      this.draggedElement.parentNode.insertBefore(this.draggedElement, this.draggedElementOrigin);
    }

    delete this.draggedElementClone;
    delete this.draggedElement;

    this.sortableNodes = [];
    this.animatedElements = [];
    this.dragRequestPending = false;
    this.updateUserSelectStyle('text');
  }

  /**
   * Triggers a CSS animation on a node with the given dx and dy. Used following dom updates to make it appear as
   * if nodes animate from their old to their new position in the dom.
   *
   * @param {Node} node
   * @param {number} dx
   * @param {number} dy
   */
  private animateNode(node: HTMLElement, dx = 0, dy = 0): void {
    if (!node.animate) {
      return;
    }

    // keep a stack of currently animating nodes to exclude as drag & drop targets.
    this.animatedElements.push(node);

    Object.assign(node.style, {
      willChange: 'transform',
    });

    // animate from dx/dy (old node position) to none (new node position)
    this.animationPromise = new Promise((resolve) => {
      node
        .animate([{transform: `translate3d(${dx}px, ${dy}px, 0)`}, {transform: 'none'}], this.animationTiming)
        .addEventListener('finish', () => {
          const index = this.animatedElements.indexOf(node);
          Object.assign(node.style, {
            willChange: 'initial',
          });
          if (index !== -1) {
            // splice out when done to unlock as a valid target
            this.animatedElements.splice(index, 1);
          }

          resolve();
          delete this.animationPromise;
        });
    });
  }

  /**
   * Inserts node at target to update sibling sorting. If the node precedes the target, it is inserted after it;
   * If it follows the target, it is inserted before it. This ensures any node can be dragged from the very
   * beginning to the very end and vice versa. The animateNode function is called for all nodes that moved because
   * of this dom update.
   *
   * @param {Node} node
   * @param {Node} target
   */
  private insertAtTarget(node: Node, target: HTMLElement): void {
    let offsets: any[] = [];
    if (this.animationEnabled) {
      offsets = this.sortableNodes.map((item) => ({
        x: item.offsetLeft,
        y: item.offsetTop,
      }));
    }

    if (node && node.parentNode) {
      const insert = node.compareDocumentPosition(target) & this.DOCUMENT_POSITION_FOLLOWING ? target.nextSibling : target;
      node.parentNode.insertBefore(node, insert);
    }

    if (this.animationEnabled) {
      this.sortableNodes.forEach((sortableNode, i) => {
        const {x, y} = offsets[i];
        const dx = x - sortableNode.offsetLeft;
        const dy = y - sortableNode.offsetTop;
        if (dx !== 0 || dy !== 0) {
          this.animateNode(sortableNode, dx, dy);
        }
      });
    }
  }

  /**
   * Clones a given node to visually drag around. The original node is left in the same flow as its siblings. Clone
   * styles are added onto the style object directly, since the ::slotted() selector can't universally target nodes
   * that may be nested an unknown amount of shadow dom levels deep.
   *
   * @param {HTMLElement} node
   * @return {Node} clone
   */
  private createClone(node: HTMLElement): HTMLElement {
    const clone = node.cloneNode(true) as HTMLElement;

    /**
     * Bugfix for table row sorting.
     * During dragging table rows shrink, so we manually set them width of original node.
     */
    Array.from(clone.children).forEach((nodeChild: Element, index) => {
      const clonedNodeChild = nodeChild as HTMLElement;
      const originalNodeChild = node.children.item(index) as HTMLElement;

      if (originalNodeChild) {
        clonedNodeChild.style.width = `${originalNodeChild.offsetWidth}px`;
      }
    });

    /**
     * We have to copy all user defined properties manually.
     * Lit element prefixes custom properties with '__' so that's why we check for it.
     */
    Object.keys(node)
      .filter((prop) => prop.startsWith('__'))
      .forEach((prop) => ((clone as any)[prop] = (node as any)[prop]));

    const {offsetLeft: x, offsetTop: y} = node;

    this.initialScrollTop = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop);

    Object.assign(clone.style, {
      position: 'absolute',
      left: `${x}px`,
      top: `${y}px`,
      willChange: 'transform,opacity',
    });

    clone.classList.add(this.clonedClass);

    return node.parentNode!.appendChild(clone);
  }

  render() {
    return html`
      <style>
        :host {
          position: relative;
          display: block;
        }
      </style>
      <slot></slot>
    `;
  }
}
