import { property } from 'lit/decorators.js';
import { LitElement } from 'lit';

type Constructor<T = {}> = new (...args: any[]) => T;

export declare class DragAndDropInterface {
  dragOver: boolean;
  onDragOver(): void;
  onDragLeave(): void;
  onDrop(): void;
}

export const DragAndDropMixin = <T extends Constructor<LitElement>>(superClass: T) => {
  class DragAndDropMixin extends superClass {
    @property({ type: Boolean })
    dragOver = false;

    onDragOver(event: { stopPropagation: () => void; preventDefault: () => void }) {
      event.stopPropagation();
      event.preventDefault();
      this.dragOver = true;
    }

    onDragLeave(event: { stopPropagation: () => void; preventDefault: () => void }) {
      event.stopPropagation();
      event.preventDefault();
      this.dragOver = false;
    }
    onDrop() {
      this.dragOver = false;
    }
  }
  return DragAndDropMixin as Constructor<DragAndDropInterface> & T;
};
