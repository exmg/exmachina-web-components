import {ExmgRadioGroupItem} from './exmg-radio-group-item';

/**
 * Unique symbol for marking roots
 */
const selectionController = Symbol('selection controller');

class SelectionSet {
  selected: ExmgRadioGroupItem | null = null;
  focused: ExmgRadioGroupItem | null = null;
  ordered: ExmgRadioGroupItem[] | null = null;
  readonly set = new Set<ExmgRadioGroupItem>();
}

export class SelectionController {
  private sets: {[name: string]: SelectionSet} = {};

  private mouseIsDown = false;

  private updating = false;

  static getController(element: Node) {
    const root = element as any;
    if (!root[selectionController]) {
      root[selectionController] = new SelectionController(root);
    }
    return root[selectionController] as SelectionController;
  }

  constructor(element: Node) {
    // console.log('SelectionController constructor', element);
    element.addEventListener('keydown', (e: Event) => this.keyDownHandler(e as KeyboardEvent));
    element.addEventListener('mousedown', () => this.mousedownHandler());
    element.addEventListener('mouseup', () => this.mouseupHandler());
  }

  protected keyDownHandler(e: KeyboardEvent) {
    if (!(e.target instanceof ExmgRadioGroupItem)) {
      return;
    }
    const element = e.target;
    if (!this.has(element)) {
      return;
    }
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      this.next(element);
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      this.previous(element);
    }
  }

  protected mousedownHandler() {
    this.mouseIsDown = true;
  }

  protected mouseupHandler() {
    this.mouseIsDown = false;
  }

  has(element: ExmgRadioGroupItem) {
    const set = this.getSet(element.name);
    return set.set.has(element);
  }

  previous(element: ExmgRadioGroupItem) {
    const order = this.getOrdered(element);
    const i = order.indexOf(element);
    this.focus(order[i - 1] || order[order.length - 1]);
  }

  next(element: ExmgRadioGroupItem) {
    const order = this.getOrdered(element);
    const i = order.indexOf(element);
    this.focus(order[i + 1] || order[0]);
  }

  select(element: ExmgRadioGroupItem) {
    element.click();
  }

  /**
   * Helps to track the focused selection group and if it changes, focuses
   * the selected item in the group. This matches native radio button behavior.
   */
  focus(element: ExmgRadioGroupItem) {
    // Only manage focus state when using keyboard
    if (this.mouseIsDown) {
      return;
    }

    element.focusNative();
  }

  getOrdered(element: ExmgRadioGroupItem) {
    const set = this.getSet(element.name);
    if (!set.ordered) {
      set.ordered = Array.from(set.set);
      set.ordered.sort((a, b) => (a.compareDocumentPosition(b) === Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0));
    }
    return set.ordered.filter((item) => !item.disabled);
  }

  getSet(name: string) {
    if (!this.sets[name]) {
      this.sets[name] = new SelectionSet();
    }
    return this.sets[name];
  }

  register(element: ExmgRadioGroupItem) {
    const set = this.getSet(element.name);
    set.set.add(element);
    set.ordered = null;
  }

  unregister(element: ExmgRadioGroupItem) {
    const set = this.getSet(element.name);
    set.set.delete(element);
    set.ordered = null;
    if (set.selected === element) {
      set.selected = null;
    }
  }

  update(element: ExmgRadioGroupItem) {
    if (this.updating) {
      return;
    }
    this.updating = true;
    if (element.checked) {
      const set = this.getSet(element.name);
      for (const e of set.set) {
        e.checked = e === element;
      }
      set.selected = element;
    }
    this.updating = false;
  }
}
