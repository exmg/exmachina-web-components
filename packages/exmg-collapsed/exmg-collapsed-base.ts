import {html} from 'lit';
import {property, state} from 'lit/decorators.js';
import {observer} from '@exmg/exmg-base/observer/observer.js';
import {ExmgElement} from '@exmg/exmg-base/exmg-element.js';

const toggleClass = (className: string, el: HTMLElement, val?: boolean) => {
  if (val !== undefined) {
    if (val) {
      if (!el.classList.contains(className)) {
        el.classList.add(className);
      }
    } else {
      el.classList.remove(className);
    }
  } else {
    el.classList.toggle(className);
  }
};

export class ExmgCollapsedBase extends ExmgElement {
  @property({type: Boolean, reflect: true})
  @observer(function (this: ExmgCollapsedBase) {
    this._openedChanged();
  })
  opened = false;

  @property({type: Boolean, reflect: true})
  transitioning = false;

  @state()
  _desiredSize = '';

  _initialized = false;

  constructor() {
    super();
    this.addEventListener('transitionend', this._onTransitionEnd.bind(this));
    this.setAttribute('role', 'group');
    this.setAttribute('aria-hidden', 'true');
  }

  toggle() {
    this.opened = !this.opened;
  }

  show() {
    this.opened = true;
  }

  hide() {
    this.opened = false;
  }

  _calcSize() {
    return this.getBoundingClientRect()['height'] + 'px';
  }

  _updateTransition(enabled: boolean) {
    this.style.transitionDuration = enabled ? '' : '0s';
  }

  updateSize(size: string, animated: boolean) {
    // Consider 'auto' as '', to take full size.
    size = size === 'auto' ? '' : size;
    let willAnimate = animated && this._desiredSize !== size;
    this._desiredSize = size;
    this._updateTransition(false);
    // If we can animate, must do some prep work.
    if (willAnimate) {
      // Animation will start at the current size.
      const startSize = this._calcSize();
      // For `auto` we must calculate what is the final size for the animation.
      // After the transition is done, _transitionEnd will set the size back to
      // `auto`.
      if (size === '') {
        this.style['maxHeight'] = '';
        size = this._calcSize();
      }
      // Go to startSize without animation.
      this.style['maxHeight'] = startSize;
      // Force layout to ensure transition will go. Set scrollTop to itself
      // so that compilers won't remove it.
      // eslint-disable-next-line no-self-assign
      this.scrollTop = this.scrollTop;
      // Enable animation.
      this._updateTransition(true);
      // If final size is the same as startSize it will not animate.
      willAnimate = size !== startSize;
    }
    // Set the final size.
    this.style['maxHeight'] = size;
    // If it won't animate, call transitionEnd to set correct classes.
    if (!willAnimate) {
      this._transitionEnd();
    }
  }

  _openedChanged() {
    this.setAttribute('aria-hidden', String(!this.opened));
    if (this._initialized) {
      this.transitioning = true;
    }
    toggleClass('collapse-closed', this, false);
    toggleClass('collapse-opened', this, false);
    this.updateSize(this.opened ? 'auto' : '0px', this._initialized);
    // Focus the current collapse.
    if (this.opened) {
      this.focus();
    }

    this._initialized = true;
  }

  _onTransitionEnd(event: TransitionEvent) {
    if (event.target === this) {
      this._transitionEnd();
    }
  }

  _transitionEnd() {
    this.style['maxHeight'] = String(this._desiredSize);
    toggleClass('collapse-closed', this, !this.opened);
    toggleClass('collapse-opened', this, this.opened);
    this._updateTransition(false);
    this.transitioning = false;
  }

  protected render() {
    return html` <slot></slot> `;
  }
}
