import {ExmgElement} from '../exmg-element.js';
import {Constructor} from './types.js';

export abstract class IntervalClass extends ExmgElement {
  protected updateContent?(): void;
}

export type IntervalModeType = 'MANUAL' | 'AUTO';

export interface IntervalInterface {
  timer: number;
  mode: IntervalModeType;
  startInterval(): void;
  stopInterval(): void;
}

export const IntervalMixin = <T extends Constructor<ExmgElement & IntervalClass>>(base: T) => {
  class IntervalState extends base {
    private _timer!: any;

    timer = 5000;

    mode: IntervalModeType = 'AUTO';

    connectedCallback() {
      if (super.connectedCallback) {
        super.connectedCallback();
      }
      if (this.mode === 'AUTO') {
        this.startInterval();
      }
    }

    startInterval() {
      clearInterval(this._timer);
      if (this.updateContent) {
        this.updateContent();
        this._timer = setInterval(() => {
          this.updateContent && this.updateContent();
        }, this.timer);
      }
    }

    stopInterval() {
      clearInterval(this._timer);
    }

    disconnectedCallback() {
      clearInterval(this._timer);
      if (super.disconnectedCallback) {
        super.disconnectedCallback();
      }
    }

    updateContent() {
      // eslint-disable-next-line no-console
      console.warn('Please impl updateCOntent function or remove interval mixin from class');
    }
  }

  return IntervalState as Constructor<IntervalInterface> & T;
};
