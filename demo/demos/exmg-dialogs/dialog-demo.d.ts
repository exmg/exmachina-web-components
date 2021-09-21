import { LitElement } from "lit";
import "@exmg/exmg-dialogs/exmg-dialog-confirm";
import "@exmg/exmg-dialogs/exmg-dialog-form";
import "@exmg/exmg-dialogs/exmg-dialog-info";
import { ExmgConfirmDialog } from "@exmg/exmg-dialogs/exmg-dialog-confirm";
export declare class DialogDemo extends LitElement {
    getElementBySelector(selector: string): ExmgConfirmDialog | null;
    _delete(e: CustomEvent): void;
    _saveData(e: CustomEvent): void;
    _saveDataTicket(e: CustomEvent): void;
    _done(e: CustomEvent): void;
    _cancelCallback(e: CustomEvent): void;
    _saveDataError(e: CustomEvent): void;
    render(): import("lit").TemplateResult<1>;
}
