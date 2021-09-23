import { LitElement } from 'lit-element';
import '@exmg/exmg-button/exmg-button.js';
export declare class DemoApp extends LitElement {
    static styles: import("lit-element").CSSResult[];
    private selectedElement?;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private updateElementFromUrl;
    private getSelectedElementStorybookUrl;
    private renderElements;
    protected render(): import("lit-element").TemplateResult;
}
