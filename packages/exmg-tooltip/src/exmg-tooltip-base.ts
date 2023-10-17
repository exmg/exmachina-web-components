import { html } from 'lit';
import { property } from 'lit/decorators/property.js';
import { state } from 'lit/decorators.js';
import { query } from 'lit/decorators/query.js';
import { ExmgElement, observer } from '@exmg/lit-base/index.js';

export class ExmgTooltipBase extends ExmgElement {
  /**
   * The id of the element that the tooltip is anchored to. This element
   * must be a sibling of the tooltip.
   */
  @property({ type: String })
  @observer(function (this: ExmgTooltipBase) {
    this._findTarget();
  })
  for?: string;

  /**
   * Positions the tooltip to the top, right, bottom, left of its content.
   */
  @property({ type: String })
  position = 'bottom';

  /**
   * If true, no parts of the tooltip will ever be shown offscreen.
   */
  @property({ type: Boolean })
  fitToVisibleBounds = false;

  /**
   * X axis offset from the parent's center
   */
  @property({ type: Number })
  xOffset?: number;

  /**
   * Y axis offset from the parent's center
   */
  @property({ type: Number })
  yOffset?: number;

  @state()
  _showing = false;

  @query('#tooltip')
  tooltip?: HTMLElement;

  private _target?: HTMLElement;
  private _boundShow: any;
  private _boundHide: any;

  /**
   * Returns the target element that this tooltip is anchored to. It is
   * either the element given by the `for` attribute, or the immediate parent
   * of the tooltip.
   */
  get target() {
    const parentNode = this.parentNode;
    // If the parentNode is a document fragment, then we need to use the host.
    const ownerRoot = parentNode!.getRootNode();

    let target;
    if (this.for) {
      target = (ownerRoot as HTMLElement).querySelector<HTMLElement>('#' + this.for);
    } else {
      // @ts-ignore
      target = parentNode!.nodeType == Node.DOCUMENT_FRAGMENT_NODE ? ownerRoot.host : parentNode;
    }

    return target;
  }

  connectedCallback() {
    super.connectedCallback();
    this._boundShow = this.show.bind(this);
    this._boundHide = this.hide.bind(this);

    this.setAttribute('role', 'tooltip');
    this.setAttribute('tabindex', '-1');

    this._findTarget();
  }

  disconnectedCallback() {
    this._removeListeners();
    super.disconnectedCallback();
  }

  show() {
    // If the tooltip is already showing, there's nothing to do.
    if (this._showing) {
      return;
    }
    if ((this as HTMLElement).textContent!.trim() === '') {
      // Check if effective children are also empty
      let allChildrenEmpty = true;
      const effectiveChildren = this.childNodes;
      for (let i = 0; i < effectiveChildren.length; i++) {
        if ((effectiveChildren[i] as HTMLElement).textContent!.trim() !== '') {
          allChildrenEmpty = false;
          break;
        }
      }
      if (allChildrenEmpty) {
        return;
      }
    }

    this._showing = true;
    this.toggleClass('hidden', false, this.tooltip!);
    this.updatePosition();
  }

  /**
   * Toggles a CSS class on or off.
   */
  toggleClass(name: string, bool: boolean, node: HTMLElement) {
    node = /** @type {Element} */ node || this;
    if (arguments.length == 1) {
      bool = !node.classList.contains(name);
    }
    if (bool) {
      node.classList.add(name);
    } else {
      node.classList.remove(name);
    }
  }

  hide() {
    // If the tooltip is already hidden, there's nothing to do.
    if (!this._showing) {
      return;
    }
    this._showing = false;
    this.toggleClass('hidden', true, this.tooltip!);
  }

  updatePosition() {
    if (!this._target || !this.offsetParent) {
      return;
    }

    const parentRect = this.offsetParent.getBoundingClientRect();
    const targetRect = this._target.getBoundingClientRect();
    const thisRect = this.getBoundingClientRect();

    const horizontalCenterOffset = (targetRect.width - thisRect.width) / 2;
    const verticalCenterOffset = (targetRect.height - thisRect.height) / 2;

    const targetLeft = targetRect.left - parentRect.left;
    const targetTop = targetRect.top - parentRect.top;

    let tooltipLeft = 0;
    let tooltipTop = 0;

    switch (this.position) {
      case 'top':
        tooltipLeft = targetLeft + horizontalCenterOffset;
        tooltipTop = targetTop - thisRect.height;
        break;
      case 'bottom':
        tooltipLeft = targetLeft + horizontalCenterOffset;
        tooltipTop = targetTop + targetRect.height;
        break;
      case 'left':
        tooltipLeft = targetLeft - thisRect.width;
        tooltipTop = targetTop + verticalCenterOffset;
        break;
      case 'right':
        tooltipLeft = targetLeft + targetRect.width;
        tooltipTop = targetTop + verticalCenterOffset;
        break;
    }

    if (this.xOffset !== undefined) {
      tooltipLeft += this.xOffset;
    }
    if (this.yOffset !== undefined) {
      tooltipTop += this.yOffset;
    }

    if (this.fitToVisibleBounds) {
      // Clip the left/right side
      if (parentRect.left + tooltipLeft + thisRect.width > window.innerWidth) {
        this.style.right = '0px';
        this.style.left = 'auto';
      } else {
        this.style.left = Math.max(0, tooltipLeft) + 'px';
        this.style.right = 'auto';
      }

      // Clip the top/bottom side.
      if (parentRect.top + tooltipTop + thisRect.height > window.innerHeight) {
        this.style.bottom = parentRect.height + 'px';
        this.style.top = 'auto';
      } else {
        this.style.top = Math.max(-parentRect.top, tooltipTop) + 'px';
        this.style.bottom = 'auto';
      }
    } else {
      this.style.left = tooltipLeft + 'px';
      this.style.top = tooltipTop + 'px';
    }
  }

  _addListeners() {
    if (this._target) {
      this._target.addEventListener('mouseenter', this._boundShow);
      this._target.addEventListener('focus', this._boundShow);
      this._target.addEventListener('mouseleave', this._boundHide);
      this._target.addEventListener('blur', this._boundHide);
      this._target.addEventListener('tap', this._boundHide);
    }
    this.addEventListener('mouseenter', this._boundHide);
  }

  _findTarget() {
    this._removeListeners();

    this._target = this.target;
    this._addListeners();
  }

  _removeListeners() {
    if (this._target) {
      this._target.removeEventListener('mouseenter', this._boundShow);
      this._target.removeEventListener('focus', this._boundShow);
      this._target.removeEventListener('mouseleave', this._boundHide);
      this._target.removeEventListener('blur', this._boundHide);
      this._target.removeEventListener('tap', this._boundHide);
    }
    this.removeEventListener('mouseenter', this._boundHide);
  }

  protected render() {
    return html`
      <div id="tooltip" class="hidden">
        <slot></slot>
      </div>
    `;
  }
}
