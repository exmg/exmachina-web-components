import { LitElement } from "lit-element";
import "@polymer/paper-dialog";
import "@polymer/paper-dialog-scrollable";
import "@exmg/exmg-button/exmg-button";
import "@polymer/iron-form";
import "@material/mwc-icon-button";
export declare class ExmgInfoDialog extends LitElement {
    /**
     * Title of the dialog
     */
    title: string;
    /**
     * Copy for done button
     */
    private buttonCopy;
    /**
     * Hide close button ?
     */
    private hideCloseButton;
    /**
     * Show close button as unelevated
     */
    private buttonUnelevated?;
    private dialogNode?;
    static styles: import("lit-element").CSSResult[];
    open(): void;
    close(): void;
    done(): void;
    renderHeader(): import("lit-element").TemplateResult;
    protected render(): import("lit-element").TemplateResult;
}
