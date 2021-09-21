import { LitElement } from "lit-element";
import "@polymer/paper-dialog";
import "@material/mwc-icon-button";
import "@polymer/paper-dialog-scrollable";
import "@exmg/exmg-button/exmg-button";
import "@polymer/iron-form";
export declare class ExmgFormDialog extends LitElement {
    /**
     * Title of the dialog
     */
    title: string;
    /**
     * Copy for submit button
     */
    buttonCopy: string;
    /**
     * Hide close button ?
     */
    private hideCloseButton;
    /**
     * Indicator if submit is in progress This boolean will display the progress
     * bar at the bottom of the dialog
     */
    private submitting;
    /**
     * When set this will be shown in the error section of the dialog
     */
    private errorMessage?;
    private dialogNode?;
    private formNode?;
    private submitBtnNode?;
    static styles: import("lit-element").CSSResult[];
    constructor();
    private onCloseDialog;
    open(): void;
    close(): void;
    private reset;
    error(error: Error): void;
    done(): void;
    private cancel;
    submit(): void;
    protected render(): import("lit-element").TemplateResult;
}
