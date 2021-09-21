import {LitElement} from 'lit-element';
import '@material/mwc-icon-button';
import '@polymer/paper-dialog';
import '@exmg/exmg-button/exmg-button.js';
import '@polymer/iron-form';
export declare class ExmgConfirmDialog extends LitElement {
    /**
     * Title of the dialog
     */
    title: string;
    /**
     * Dialog message to display as confirmation question. Alternative would be to just add a slot body including a message.
     */
    private message;
    /**
     * Hide close button ?
     */
    private hideCloseButton;
    /**
     * Copy for submit button
     */
    private buttonCopy;
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
    private submitBtnNode?;
    private hasSlotContent;
    private observer?;
    static styles: import('lit-element').CSSResult[];
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    private onCloseDialog;
    open(): void;
    close(): void;
    private reset;
    error(error: Error): void;
    done(): void;
    private cancel;
    private submit;
    protected render(): import('lit-element').TemplateResult;
}
