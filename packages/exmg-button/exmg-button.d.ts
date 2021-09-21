import '@material/mwc-ripple/mwc-ripple';
import {ButtonBase} from '@material/mwc-button/mwc-button-base.js';
import './exmg-spinner.js';
export declare class ExmgButton extends ButtonBase {
    loading: boolean;
    progress?: number;
    static styles: import('lit-element').CSSResult[];
    protected render(): import('lit-element').TemplateResult;
    private handleRippleActivateA;
    private handleRippleDeactivateA;
    private handleRippleMouseEnterA;
    private handleRippleMouseLeaveA;
    private handleRippleFocusA;
    private handleRippleBlurA;
}
