import { Component, Input } from '@angular/core';
import { DEFAULT_TRANSLATION_DICTIONARY } from '../types/TranslationDictionaryType';
import { Validators } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/common";
import * as i3 from "@angular/router";
import * as i4 from "../Tagline/tagline.component";
import * as i5 from "../shared/FormElementMessage/form-element-message.component";
export class ForgotPasswordFormComponent {
    constructor(fb) {
        this.fb = fb;
        this.translationDictionary = DEFAULT_TRANSLATION_DICTIONARY;
        this.passwordResetLinkSent = false;
    }
    ngOnInit() {
        this.initForm();
    }
    initForm() {
        this.forgotPasswordForm = this.fb.group({
            email: ['', [Validators.required, Validators.email]],
        });
    }
    get forgotPasswordGreetingTitle() {
        return this.translationDictionary.FORGOT_PASSWORD_FORM__GREETING_TITLE;
    }
    get forgotPasswordGreetingSubtitle() {
        return this.translationDictionary.FORGOT_PASSWORD_FORM__GREETING_SUBTITLE;
    }
    get forgotPasswordFormLabelEmail() {
        return this.translationDictionary.FORGOT_PASSWORD_FORM__LABEL_EMAIL;
    }
    get forgotPasswordFormUsernameErrorMessage() {
        return this.translationDictionary['FORGOT_PASSWORD_ERROR__BLANK_USERNAME'];
    }
    get forgotPasswordFormInvalidUsername() {
        return this.translationDictionary.FORGOT_PASSWORD_ERROR__INVALID_USERNAME;
    }
    get forgotPasswordFormUserNotFound() {
        return this.translationDictionary.FORGOT_PASSWORD_ERROR__USER_NOT_FOUND;
    }
    onSubmit() {
        console.log('onSubmit');
        if (this.forgotPasswordForm.invalid) {
            this.forgotPasswordForm.markAllAsTouched();
            return;
        }
        const enteredEmail = this.forgotPasswordForm.value.email;
        if (!this.isUserExists(enteredEmail)) {
            this.forgotPasswordForm.setErrors({ userNotFound: true });
        }
        else {
            console.log('reset link sent to:', this.forgotPasswordForm.value);
            this.sendPasswordResetLink(enteredEmail);
        }
    }
    isUserExists(email) {
        return false;
    }
    sendPasswordResetLink(email) {
        console.log('Password reset link sent to ${enteredEmail}', email);
        this.passwordResetLinkSent = true;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: ForgotPasswordFormComponent, deps: [{ token: i1.FormBuilder }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.2", type: ForgotPasswordFormComponent, selector: "lib-forgot-password-form", inputs: { translationDictionary: "translationDictionary", translationName: "translationName" }, ngImport: i0, template: "<form class=\"authlite-d1-forgotpassword-form\" [formGroup]=\"forgotPasswordForm\" (ngSubmit)=\"onSubmit()\">\r\n  <div class=\"authlite-margin-top\">\r\n    <lib-tagline [title]=\"forgotPasswordGreetingTitle\" [subtitle]=\"forgotPasswordGreetingSubtitle\">\r\n    </lib-tagline>\r\n  </div>\r\n  <div class=\"authlite-margin-top\">\r\n    <lib-form-element-message [email]=\"forgotPasswordFormLabelEmail\">\r\n    </lib-form-element-message>\r\n    <input type=\"email\" class=\"authlite-input\" name=\"email\" autocomplete=\"off\" formControlName=\"email\" value=\"\" />\r\n    <lib-form-element-message\r\n      *ngIf=\"forgotPasswordForm.controls['email'].touched && forgotPasswordForm.controls['email'].hasError('required')\"\r\n      [blankUsername]=\"forgotPasswordFormUsernameErrorMessage\">\r\n    </lib-form-element-message>\r\n    <lib-form-element-message\r\n      *ngIf=\"forgotPasswordForm.controls['email'].touched && forgotPasswordForm.controls['email'].hasError('email')\"\r\n      [invalidUsername]=\"forgotPasswordFormInvalidUsername\">\r\n    </lib-form-element-message>\r\n    <lib-form-element-message *ngIf=\"forgotPasswordForm.errors?.['userNotFound']\"\r\n      [userNotFound]=\"forgotPasswordFormUserNotFound\">\r\n    </lib-form-element-message>\r\n  </div>\r\n  <div class=\"authlite-action-bar authlite-margin-top\">\r\n    <button class=\"authlite-primary-button\"\r\n      type=\"submit\">{{translationDictionary.FORGOT_PASSWORD_FORM__ACTION_SEND}}</button>\r\n  </div>\r\n  <div class=\"authlite-action-bar-center authlite-margin-top\">\r\n    {{translationDictionary.FORGOT_PASSWORD_FORM__MESSAGE_REMEMBER_PASSWORD}}\r\n    <button class=\"authlite-button-as-link\"\r\n      routerLink=\"/SigninForm\">{{translationDictionary.FORGOT_PASSWORD_FORM__ACTION_SIGNIN}}</button>\r\n  </div>\r\n</form>", styles: ["*{--theme-color-primary: #107cc4;--theme-color-primary-alt: #219ef1;--theme-color-grey: #4c4c4c}*{--theme-black-900: #020202;--theme-black-800: #080808;--theme-black-700: #0e0e0e;--theme-black-600: #141414;--theme-black-500: #1a1a1a;--theme-black-400: #202020;--theme-black-300: #262626;--theme-black-200: #2c2c2c;--theme-black-100: #323232;--theme-black-50: #383838;--theme-black-900i: #fff;--theme-black-800i: #fff;--theme-black-700i: #fff;--theme-black-600i: #fff;--theme-black-500i: #fff;--theme-black-400i: #fff;--theme-black-300i: #fff;--theme-black-200i: #fff;--theme-black-100i: #fff;--theme-black-50i: #fff}*{--theme-white-900: #c6c6c6;--theme-white-800: #cccccc;--theme-white-700: #d2d2d2;--theme-white-600: #d8d8d8;--theme-white-500: #dedede;--theme-white-400: #e4e4e4;--theme-white-300: #eaeaea;--theme-white-200: #f0f0f0;--theme-white-100: #f6f6f6;--theme-white-50: #fcfcfc;--theme-white-900i: #000;--theme-white-800i: #000;--theme-white-700i: #000;--theme-white-600i: #000;--theme-white-500i: #000;--theme-white-400i: #000;--theme-white-300i: #000;--theme-white-200i: #000;--theme-white-100i: #000;--theme-white-50i: #000}*{--theme-black-extended-900: #3e3e3e;--theme-black-extended-800: #444444;--theme-black-extended-700: #4a4a4a;--theme-black-extended-600: #505050;--theme-black-extended-500: #565656;--theme-black-extended-400: #5c5c5c;--theme-black-extended-300: #626262;--theme-black-extended-200: #686868;--theme-black-extended-100: #6e6e6e;--theme-black-extended-50: #747474;--theme-black-extended-900i: #fff;--theme-black-extended-800i: #fff;--theme-black-extended-700i: #fff;--theme-black-extended-600i: #fff;--theme-black-extended-500i: #fff;--theme-black-extended-400i: #fff;--theme-black-extended-300i: #fff;--theme-black-extended-200i: #fff;--theme-black-extended-100i: #fff;--theme-black-extended-50i: #fff}*{--theme-white-extended-900: #8a8a8a;--theme-white-extended-800: #909090;--theme-white-extended-700: #969696;--theme-white-extended-600: #9c9c9c;--theme-white-extended-500: #a2a2a2;--theme-white-extended-400: #a8a8a8;--theme-white-extended-300: #aeaeae;--theme-white-extended-200: #b4b4b4;--theme-white-extended-100: #bababa;--theme-white-extended-50: #c0c0c0;--theme-white-extended-900i: #000;--theme-white-extended-800i: #000;--theme-white-extended-700i: #000;--theme-white-extended-600i: #000;--theme-white-extended-500i: #000;--theme-white-extended-400i: #000;--theme-white-extended-300i: #000;--theme-white-extended-200i: #000;--theme-white-extended-100i: #000;--theme-white-extended-50i: #000}.authlite-light{color:var(--theme-black-900)}.authlite-dark{color:var(--theme-white-50)}.authlite-input{padding:10px;text-overflow:ellipsis;font-size:14px;font-weight:400;height:40px;width:100%;line-height:24px;background-color:#f8f8f8;border:1px solid #e3e3e3;border-radius:4px;outline:none;transition:background-color .25s ease-in-out,border-color .25s ease-in-out}.authlite-input:focus{border-color:var(--theme-color-primary-alt)}.authlite-button-as-link,.authlite-button,.authlite-primary-button{padding:0 20px;font-size:14px;font-weight:400;outline:none;border:none;cursor:pointer;transition:background-color .25s ease-in-out,color .25s ease-in-out,border-color .25s ease-in-out}.authlite-button,.authlite-primary-button{height:40px;line-height:24px;border-radius:4px;background-color:#e4e4e4;color:#000}.authlite-button:hover,.authlite-button:focus{background-color:#d7d7d7}.authlite-primary-button{background-color:var(--theme-color-primary-alt);color:#fff}.authlite-primary-button:hover,.authlite-primary-button:focus{background-color:var(--theme-color-primary);color:#fff}.authlite-button-as-link{background-color:transparent;border:none;outline:none;cursor:pointer;padding:0 0 2px;color:var(--theme-color-grey);border-bottom:1px dotted transparent;border-bottom:1px dotted var(--theme-color-grey)}.authlite-button-as-link:hover,.authlite-button-as-link:focus{color:var(--theme-color-primary);border-color:var(--theme-color-primary)}.authlite-form-element-error,.authlite-form-element-warning,.authlite-form-element-success,.authlite-form-element-info{margin-top:4px;font-size:10px;color:#cc2936}.authlite-form-element-warning{color:#ffd25a}.authlite-form-element-success{color:#86cd82}.authlite-form-element-info,.authlite-dark .authlite-form-element-info{color:#666b6a}.authlite-form-element-label{display:block;font-size:12px;margin-bottom:4px;text-transform:capitalize;word-break:keep-all;color:#666b6a}a{transition:.25s color ease-in-out,.25s border-color ease-in-out;cursor:pointer}a,a:hover,a:focus,a:active{text-decoration:none}a{color:var(--theme-color-primary);border-bottom:1px dotted transparent}a:hover,a:focus{color:var(--theme-color-primary-alt);border-color:var(--theme-color-primary-alt)}html{font-size:100%;font-size:14px}body{line-height:1.5}h1,h2,h3,h4,h5,h6,.h1,.h2,.h3,.h4,.h5,.h6{margin-top:0;margin-bottom:.5rem;line-height:1.3}p,.p{margin-top:0;margin-bottom:1rem;font-size:1rem}h1,.h1{font-size:3.052rem}h2,.h2{font-size:2.441rem}h3,.h3{font-size:1.953rem}h4,.h4{font-size:1.563rem}h5,.h5{font-size:1.25rem}h6,.h6{font-size:1rem;font-weight:400}small,.small{font-size:.8rem}b,strong{font-weight:700}mark,.mark{background-color:#fae5c2}.authlite-margin-top{margin-top:20px}.authlite-margin-top-small{margin-top:10px}.authlite-action-bar,.authlite-action-bar-center{display:grid;grid-auto-flow:column;align-items:center;column-gap:10px}.authlite-action-bar-center{justify-content:center}*{box-sizing:border-box}.authlite-action-bar,.authlite-action-bar-center{font-size:12px}\n"], dependencies: [{ kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i1.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }, { kind: "directive", type: i3.RouterLink, selector: "[routerLink]", inputs: ["target", "queryParams", "fragment", "queryParamsHandling", "state", "info", "relativeTo", "preserveFragment", "skipLocationChange", "replaceUrl", "routerLink"] }, { kind: "component", type: i4.TaglineComponent, selector: "lib-tagline", inputs: ["title", "subtitle"] }, { kind: "component", type: i5.FormElementMessageComponent, selector: "lib-form-element-message", inputs: ["email", "password", "given_name", "family_name", "retype_password", "type", "blankUsername", "blankPassword", "invalidUsername", "userNotFound", "incorrectPassword", "blankGivenname", "blankFamilyname", "blankRetypePassword", "RetypePasswordDoesnotmatch"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: ForgotPasswordFormComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-forgot-password-form', template: "<form class=\"authlite-d1-forgotpassword-form\" [formGroup]=\"forgotPasswordForm\" (ngSubmit)=\"onSubmit()\">\r\n  <div class=\"authlite-margin-top\">\r\n    <lib-tagline [title]=\"forgotPasswordGreetingTitle\" [subtitle]=\"forgotPasswordGreetingSubtitle\">\r\n    </lib-tagline>\r\n  </div>\r\n  <div class=\"authlite-margin-top\">\r\n    <lib-form-element-message [email]=\"forgotPasswordFormLabelEmail\">\r\n    </lib-form-element-message>\r\n    <input type=\"email\" class=\"authlite-input\" name=\"email\" autocomplete=\"off\" formControlName=\"email\" value=\"\" />\r\n    <lib-form-element-message\r\n      *ngIf=\"forgotPasswordForm.controls['email'].touched && forgotPasswordForm.controls['email'].hasError('required')\"\r\n      [blankUsername]=\"forgotPasswordFormUsernameErrorMessage\">\r\n    </lib-form-element-message>\r\n    <lib-form-element-message\r\n      *ngIf=\"forgotPasswordForm.controls['email'].touched && forgotPasswordForm.controls['email'].hasError('email')\"\r\n      [invalidUsername]=\"forgotPasswordFormInvalidUsername\">\r\n    </lib-form-element-message>\r\n    <lib-form-element-message *ngIf=\"forgotPasswordForm.errors?.['userNotFound']\"\r\n      [userNotFound]=\"forgotPasswordFormUserNotFound\">\r\n    </lib-form-element-message>\r\n  </div>\r\n  <div class=\"authlite-action-bar authlite-margin-top\">\r\n    <button class=\"authlite-primary-button\"\r\n      type=\"submit\">{{translationDictionary.FORGOT_PASSWORD_FORM__ACTION_SEND}}</button>\r\n  </div>\r\n  <div class=\"authlite-action-bar-center authlite-margin-top\">\r\n    {{translationDictionary.FORGOT_PASSWORD_FORM__MESSAGE_REMEMBER_PASSWORD}}\r\n    <button class=\"authlite-button-as-link\"\r\n      routerLink=\"/SigninForm\">{{translationDictionary.FORGOT_PASSWORD_FORM__ACTION_SIGNIN}}</button>\r\n  </div>\r\n</form>", styles: ["*{--theme-color-primary: #107cc4;--theme-color-primary-alt: #219ef1;--theme-color-grey: #4c4c4c}*{--theme-black-900: #020202;--theme-black-800: #080808;--theme-black-700: #0e0e0e;--theme-black-600: #141414;--theme-black-500: #1a1a1a;--theme-black-400: #202020;--theme-black-300: #262626;--theme-black-200: #2c2c2c;--theme-black-100: #323232;--theme-black-50: #383838;--theme-black-900i: #fff;--theme-black-800i: #fff;--theme-black-700i: #fff;--theme-black-600i: #fff;--theme-black-500i: #fff;--theme-black-400i: #fff;--theme-black-300i: #fff;--theme-black-200i: #fff;--theme-black-100i: #fff;--theme-black-50i: #fff}*{--theme-white-900: #c6c6c6;--theme-white-800: #cccccc;--theme-white-700: #d2d2d2;--theme-white-600: #d8d8d8;--theme-white-500: #dedede;--theme-white-400: #e4e4e4;--theme-white-300: #eaeaea;--theme-white-200: #f0f0f0;--theme-white-100: #f6f6f6;--theme-white-50: #fcfcfc;--theme-white-900i: #000;--theme-white-800i: #000;--theme-white-700i: #000;--theme-white-600i: #000;--theme-white-500i: #000;--theme-white-400i: #000;--theme-white-300i: #000;--theme-white-200i: #000;--theme-white-100i: #000;--theme-white-50i: #000}*{--theme-black-extended-900: #3e3e3e;--theme-black-extended-800: #444444;--theme-black-extended-700: #4a4a4a;--theme-black-extended-600: #505050;--theme-black-extended-500: #565656;--theme-black-extended-400: #5c5c5c;--theme-black-extended-300: #626262;--theme-black-extended-200: #686868;--theme-black-extended-100: #6e6e6e;--theme-black-extended-50: #747474;--theme-black-extended-900i: #fff;--theme-black-extended-800i: #fff;--theme-black-extended-700i: #fff;--theme-black-extended-600i: #fff;--theme-black-extended-500i: #fff;--theme-black-extended-400i: #fff;--theme-black-extended-300i: #fff;--theme-black-extended-200i: #fff;--theme-black-extended-100i: #fff;--theme-black-extended-50i: #fff}*{--theme-white-extended-900: #8a8a8a;--theme-white-extended-800: #909090;--theme-white-extended-700: #969696;--theme-white-extended-600: #9c9c9c;--theme-white-extended-500: #a2a2a2;--theme-white-extended-400: #a8a8a8;--theme-white-extended-300: #aeaeae;--theme-white-extended-200: #b4b4b4;--theme-white-extended-100: #bababa;--theme-white-extended-50: #c0c0c0;--theme-white-extended-900i: #000;--theme-white-extended-800i: #000;--theme-white-extended-700i: #000;--theme-white-extended-600i: #000;--theme-white-extended-500i: #000;--theme-white-extended-400i: #000;--theme-white-extended-300i: #000;--theme-white-extended-200i: #000;--theme-white-extended-100i: #000;--theme-white-extended-50i: #000}.authlite-light{color:var(--theme-black-900)}.authlite-dark{color:var(--theme-white-50)}.authlite-input{padding:10px;text-overflow:ellipsis;font-size:14px;font-weight:400;height:40px;width:100%;line-height:24px;background-color:#f8f8f8;border:1px solid #e3e3e3;border-radius:4px;outline:none;transition:background-color .25s ease-in-out,border-color .25s ease-in-out}.authlite-input:focus{border-color:var(--theme-color-primary-alt)}.authlite-button-as-link,.authlite-button,.authlite-primary-button{padding:0 20px;font-size:14px;font-weight:400;outline:none;border:none;cursor:pointer;transition:background-color .25s ease-in-out,color .25s ease-in-out,border-color .25s ease-in-out}.authlite-button,.authlite-primary-button{height:40px;line-height:24px;border-radius:4px;background-color:#e4e4e4;color:#000}.authlite-button:hover,.authlite-button:focus{background-color:#d7d7d7}.authlite-primary-button{background-color:var(--theme-color-primary-alt);color:#fff}.authlite-primary-button:hover,.authlite-primary-button:focus{background-color:var(--theme-color-primary);color:#fff}.authlite-button-as-link{background-color:transparent;border:none;outline:none;cursor:pointer;padding:0 0 2px;color:var(--theme-color-grey);border-bottom:1px dotted transparent;border-bottom:1px dotted var(--theme-color-grey)}.authlite-button-as-link:hover,.authlite-button-as-link:focus{color:var(--theme-color-primary);border-color:var(--theme-color-primary)}.authlite-form-element-error,.authlite-form-element-warning,.authlite-form-element-success,.authlite-form-element-info{margin-top:4px;font-size:10px;color:#cc2936}.authlite-form-element-warning{color:#ffd25a}.authlite-form-element-success{color:#86cd82}.authlite-form-element-info,.authlite-dark .authlite-form-element-info{color:#666b6a}.authlite-form-element-label{display:block;font-size:12px;margin-bottom:4px;text-transform:capitalize;word-break:keep-all;color:#666b6a}a{transition:.25s color ease-in-out,.25s border-color ease-in-out;cursor:pointer}a,a:hover,a:focus,a:active{text-decoration:none}a{color:var(--theme-color-primary);border-bottom:1px dotted transparent}a:hover,a:focus{color:var(--theme-color-primary-alt);border-color:var(--theme-color-primary-alt)}html{font-size:100%;font-size:14px}body{line-height:1.5}h1,h2,h3,h4,h5,h6,.h1,.h2,.h3,.h4,.h5,.h6{margin-top:0;margin-bottom:.5rem;line-height:1.3}p,.p{margin-top:0;margin-bottom:1rem;font-size:1rem}h1,.h1{font-size:3.052rem}h2,.h2{font-size:2.441rem}h3,.h3{font-size:1.953rem}h4,.h4{font-size:1.563rem}h5,.h5{font-size:1.25rem}h6,.h6{font-size:1rem;font-weight:400}small,.small{font-size:.8rem}b,strong{font-weight:700}mark,.mark{background-color:#fae5c2}.authlite-margin-top{margin-top:20px}.authlite-margin-top-small{margin-top:10px}.authlite-action-bar,.authlite-action-bar-center{display:grid;grid-auto-flow:column;align-items:center;column-gap:10px}.authlite-action-bar-center{justify-content:center}*{box-sizing:border-box}.authlite-action-bar,.authlite-action-bar-center{font-size:12px}\n"] }]
        }], ctorParameters: () => [{ type: i1.FormBuilder }], propDecorators: { translationDictionary: [{
                type: Input
            }], translationName: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9yZ290LXBhc3N3b3JkLWZvcm0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYXV0aGxpdGUtZm9ybXMtd2lkZ2V0cy9zcmMvbGliL0ZvcmdvdFBhc3N3b3JkRm9ybS9mb3Jnb3QtcGFzc3dvcmQtZm9ybS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9hdXRobGl0ZS1mb3Jtcy13aWRnZXRzL3NyYy9saWIvRm9yZ290UGFzc3dvcmRGb3JtL2ZvcmdvdC1wYXNzd29yZC1mb3JtLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBeUIsOEJBQThCLEVBQW1CLE1BQU0sb0NBQW9DLENBQUM7QUFDNUgsT0FBTyxFQUEwQixVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7OztBQU9wRSxNQUFNLE9BQU8sMkJBQTJCO0lBV3RDLFlBQW9CLEVBQWU7UUFBZixPQUFFLEdBQUYsRUFBRSxDQUFhO1FBVDFCLDBCQUFxQixHQUEwQiw4QkFBOEIsQ0FBQztRQU12RiwwQkFBcUIsR0FBWSxLQUFLLENBQUM7SUFHQSxDQUFDO0lBRXhDLFFBQVE7UUFDTixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDbEIsQ0FBQztJQUNELFFBQVE7UUFDTixJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7WUFDdEMsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDckQsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELElBQUksMkJBQTJCO1FBQzdCLE9BQU8sSUFBSSxDQUFDLHFCQUFxQixDQUFDLG9DQUFvQyxDQUFDO0lBQ3pFLENBQUM7SUFDRCxJQUFJLDhCQUE4QjtRQUNoQyxPQUFPLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyx1Q0FBdUMsQ0FBQztJQUM1RSxDQUFDO0lBQ0QsSUFBSSw0QkFBNEI7UUFDOUIsT0FBTyxJQUFJLENBQUMscUJBQXFCLENBQUMsaUNBQWlDLENBQUM7SUFDdEUsQ0FBQztJQUNELElBQUksc0NBQXNDO1FBQ3hDLE9BQU8sSUFBSSxDQUFDLHFCQUFxQixDQUFDLHVDQUF1QyxDQUFDLENBQUM7SUFDN0UsQ0FBQztJQUNELElBQUksaUNBQWlDO1FBQ25DLE9BQU8sSUFBSSxDQUFDLHFCQUFxQixDQUFDLHVDQUF1QyxDQUFDO0lBQzVFLENBQUM7SUFDRCxJQUFJLDhCQUE4QjtRQUNoQyxPQUFPLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxxQ0FBcUMsQ0FBQztJQUMxRSxDQUFDO0lBQ0QsUUFBUTtRQUNOLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUE7UUFDdkIsSUFBSSxJQUFJLENBQUMsa0JBQWtCLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDcEMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGdCQUFnQixFQUFFLENBQUM7WUFDM0MsT0FBTztRQUNULENBQUM7UUFDRCxNQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQztRQUV6RCxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDO1lBQ3JDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLENBQUMsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUM1RCxDQUFDO2FBQ0ksQ0FBQztZQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2xFLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUMzQyxDQUFDO0lBQ0gsQ0FBQztJQUNELFlBQVksQ0FBQyxLQUFhO1FBQ3hCLE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUNELHFCQUFxQixDQUFDLEtBQWE7UUFDakMsT0FBTyxDQUFDLEdBQUcsQ0FBQyw2Q0FBNkMsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNsRSxJQUFJLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFDO0lBQ3BDLENBQUM7OEdBOURVLDJCQUEyQjtrR0FBM0IsMkJBQTJCLGdLQ1R4QyxzeURBOEJPOzsyRkRyQk0sMkJBQTJCO2tCQUx2QyxTQUFTOytCQUNFLDBCQUEwQjtnRkFNM0IscUJBQXFCO3NCQUE3QixLQUFLO2dCQUVHLGVBQWU7c0JBQXZCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFRyYW5zbGF0aW9uRGljdGlvbmFyeSwgREVGQVVMVF9UUkFOU0xBVElPTl9ESUNUSU9OQVJZLCBUcmFuc2xhdGlvbk5hbWUgfSBmcm9tICcuLi90eXBlcy9UcmFuc2xhdGlvbkRpY3Rpb25hcnlUeXBlJztcclxuaW1wb3J0IHsgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbGliLWZvcmdvdC1wYXNzd29yZC1mb3JtJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vZm9yZ290LXBhc3N3b3JkLWZvcm0uY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2ZvcmdvdC1wYXNzd29yZC1mb3JtLmNvbXBvbmVudC5zY3NzJ10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGb3Jnb3RQYXNzd29yZEZvcm1Db21wb25lbnQge1xyXG5cclxuICBASW5wdXQoKSB0cmFuc2xhdGlvbkRpY3Rpb25hcnk6IFRyYW5zbGF0aW9uRGljdGlvbmFyeSA9IERFRkFVTFRfVFJBTlNMQVRJT05fRElDVElPTkFSWTtcclxuXHJcbiAgQElucHV0KCkgdHJhbnNsYXRpb25OYW1lITogVHJhbnNsYXRpb25OYW1lO1xyXG5cclxuICBmb3Jnb3RQYXNzd29yZEZvcm0hOiBGb3JtR3JvdXA7XHJcblxyXG4gIHBhc3N3b3JkUmVzZXRMaW5rU2VudDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIGVtYWlsOiBhbnk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZmI6IEZvcm1CdWlsZGVyKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmluaXRGb3JtKCk7XHJcbiAgfVxyXG4gIGluaXRGb3JtKCk6IHZvaWQge1xyXG4gICAgdGhpcy5mb3Jnb3RQYXNzd29yZEZvcm0gPSB0aGlzLmZiLmdyb3VwKHtcclxuICAgICAgZW1haWw6IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMuZW1haWxdXSxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGZvcmdvdFBhc3N3b3JkR3JlZXRpbmdUaXRsZSgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMudHJhbnNsYXRpb25EaWN0aW9uYXJ5LkZPUkdPVF9QQVNTV09SRF9GT1JNX19HUkVFVElOR19USVRMRTtcclxuICB9XHJcbiAgZ2V0IGZvcmdvdFBhc3N3b3JkR3JlZXRpbmdTdWJ0aXRsZSgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMudHJhbnNsYXRpb25EaWN0aW9uYXJ5LkZPUkdPVF9QQVNTV09SRF9GT1JNX19HUkVFVElOR19TVUJUSVRMRTtcclxuICB9XHJcbiAgZ2V0IGZvcmdvdFBhc3N3b3JkRm9ybUxhYmVsRW1haWwoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLnRyYW5zbGF0aW9uRGljdGlvbmFyeS5GT1JHT1RfUEFTU1dPUkRfRk9STV9fTEFCRUxfRU1BSUw7XHJcbiAgfVxyXG4gIGdldCBmb3Jnb3RQYXNzd29yZEZvcm1Vc2VybmFtZUVycm9yTWVzc2FnZSgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMudHJhbnNsYXRpb25EaWN0aW9uYXJ5WydGT1JHT1RfUEFTU1dPUkRfRVJST1JfX0JMQU5LX1VTRVJOQU1FJ107XHJcbiAgfVxyXG4gIGdldCBmb3Jnb3RQYXNzd29yZEZvcm1JbnZhbGlkVXNlcm5hbWUoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLnRyYW5zbGF0aW9uRGljdGlvbmFyeS5GT1JHT1RfUEFTU1dPUkRfRVJST1JfX0lOVkFMSURfVVNFUk5BTUU7XHJcbiAgfVxyXG4gIGdldCBmb3Jnb3RQYXNzd29yZEZvcm1Vc2VyTm90Rm91bmQoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLnRyYW5zbGF0aW9uRGljdGlvbmFyeS5GT1JHT1RfUEFTU1dPUkRfRVJST1JfX1VTRVJfTk9UX0ZPVU5EO1xyXG4gIH1cclxuICBvblN1Ym1pdCgpOiB2b2lkIHtcclxuICAgIGNvbnNvbGUubG9nKCdvblN1Ym1pdCcpXHJcbiAgICBpZiAodGhpcy5mb3Jnb3RQYXNzd29yZEZvcm0uaW52YWxpZCkge1xyXG4gICAgICB0aGlzLmZvcmdvdFBhc3N3b3JkRm9ybS5tYXJrQWxsQXNUb3VjaGVkKCk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNvbnN0IGVudGVyZWRFbWFpbCA9IHRoaXMuZm9yZ290UGFzc3dvcmRGb3JtLnZhbHVlLmVtYWlsO1xyXG5cclxuICAgIGlmICghdGhpcy5pc1VzZXJFeGlzdHMoZW50ZXJlZEVtYWlsKSkge1xyXG4gICAgICB0aGlzLmZvcmdvdFBhc3N3b3JkRm9ybS5zZXRFcnJvcnMoeyB1c2VyTm90Rm91bmQ6IHRydWUgfSk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgY29uc29sZS5sb2coJ3Jlc2V0IGxpbmsgc2VudCB0bzonLCB0aGlzLmZvcmdvdFBhc3N3b3JkRm9ybS52YWx1ZSk7XHJcbiAgICAgIHRoaXMuc2VuZFBhc3N3b3JkUmVzZXRMaW5rKGVudGVyZWRFbWFpbCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGlzVXNlckV4aXN0cyhlbWFpbDogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG4gIHNlbmRQYXNzd29yZFJlc2V0TGluayhlbWFpbDogc3RyaW5nKTogdm9pZCB7XHJcbiAgICBjb25zb2xlLmxvZygnUGFzc3dvcmQgcmVzZXQgbGluayBzZW50IHRvICR7ZW50ZXJlZEVtYWlsfScsIGVtYWlsKTtcclxuICAgIHRoaXMucGFzc3dvcmRSZXNldExpbmtTZW50ID0gdHJ1ZTtcclxuICB9XHJcbn0iLCI8Zm9ybSBjbGFzcz1cImF1dGhsaXRlLWQxLWZvcmdvdHBhc3N3b3JkLWZvcm1cIiBbZm9ybUdyb3VwXT1cImZvcmdvdFBhc3N3b3JkRm9ybVwiIChuZ1N1Ym1pdCk9XCJvblN1Ym1pdCgpXCI+XHJcbiAgPGRpdiBjbGFzcz1cImF1dGhsaXRlLW1hcmdpbi10b3BcIj5cclxuICAgIDxsaWItdGFnbGluZSBbdGl0bGVdPVwiZm9yZ290UGFzc3dvcmRHcmVldGluZ1RpdGxlXCIgW3N1YnRpdGxlXT1cImZvcmdvdFBhc3N3b3JkR3JlZXRpbmdTdWJ0aXRsZVwiPlxyXG4gICAgPC9saWItdGFnbGluZT5cclxuICA8L2Rpdj5cclxuICA8ZGl2IGNsYXNzPVwiYXV0aGxpdGUtbWFyZ2luLXRvcFwiPlxyXG4gICAgPGxpYi1mb3JtLWVsZW1lbnQtbWVzc2FnZSBbZW1haWxdPVwiZm9yZ290UGFzc3dvcmRGb3JtTGFiZWxFbWFpbFwiPlxyXG4gICAgPC9saWItZm9ybS1lbGVtZW50LW1lc3NhZ2U+XHJcbiAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgY2xhc3M9XCJhdXRobGl0ZS1pbnB1dFwiIG5hbWU9XCJlbWFpbFwiIGF1dG9jb21wbGV0ZT1cIm9mZlwiIGZvcm1Db250cm9sTmFtZT1cImVtYWlsXCIgdmFsdWU9XCJcIiAvPlxyXG4gICAgPGxpYi1mb3JtLWVsZW1lbnQtbWVzc2FnZVxyXG4gICAgICAqbmdJZj1cImZvcmdvdFBhc3N3b3JkRm9ybS5jb250cm9sc1snZW1haWwnXS50b3VjaGVkICYmIGZvcmdvdFBhc3N3b3JkRm9ybS5jb250cm9sc1snZW1haWwnXS5oYXNFcnJvcigncmVxdWlyZWQnKVwiXHJcbiAgICAgIFtibGFua1VzZXJuYW1lXT1cImZvcmdvdFBhc3N3b3JkRm9ybVVzZXJuYW1lRXJyb3JNZXNzYWdlXCI+XHJcbiAgICA8L2xpYi1mb3JtLWVsZW1lbnQtbWVzc2FnZT5cclxuICAgIDxsaWItZm9ybS1lbGVtZW50LW1lc3NhZ2VcclxuICAgICAgKm5nSWY9XCJmb3Jnb3RQYXNzd29yZEZvcm0uY29udHJvbHNbJ2VtYWlsJ10udG91Y2hlZCAmJiBmb3Jnb3RQYXNzd29yZEZvcm0uY29udHJvbHNbJ2VtYWlsJ10uaGFzRXJyb3IoJ2VtYWlsJylcIlxyXG4gICAgICBbaW52YWxpZFVzZXJuYW1lXT1cImZvcmdvdFBhc3N3b3JkRm9ybUludmFsaWRVc2VybmFtZVwiPlxyXG4gICAgPC9saWItZm9ybS1lbGVtZW50LW1lc3NhZ2U+XHJcbiAgICA8bGliLWZvcm0tZWxlbWVudC1tZXNzYWdlICpuZ0lmPVwiZm9yZ290UGFzc3dvcmRGb3JtLmVycm9ycz8uWyd1c2VyTm90Rm91bmQnXVwiXHJcbiAgICAgIFt1c2VyTm90Rm91bmRdPVwiZm9yZ290UGFzc3dvcmRGb3JtVXNlck5vdEZvdW5kXCI+XHJcbiAgICA8L2xpYi1mb3JtLWVsZW1lbnQtbWVzc2FnZT5cclxuICA8L2Rpdj5cclxuICA8ZGl2IGNsYXNzPVwiYXV0aGxpdGUtYWN0aW9uLWJhciBhdXRobGl0ZS1tYXJnaW4tdG9wXCI+XHJcbiAgICA8YnV0dG9uIGNsYXNzPVwiYXV0aGxpdGUtcHJpbWFyeS1idXR0b25cIlxyXG4gICAgICB0eXBlPVwic3VibWl0XCI+e3t0cmFuc2xhdGlvbkRpY3Rpb25hcnkuRk9SR09UX1BBU1NXT1JEX0ZPUk1fX0FDVElPTl9TRU5EfX08L2J1dHRvbj5cclxuICA8L2Rpdj5cclxuICA8ZGl2IGNsYXNzPVwiYXV0aGxpdGUtYWN0aW9uLWJhci1jZW50ZXIgYXV0aGxpdGUtbWFyZ2luLXRvcFwiPlxyXG4gICAge3t0cmFuc2xhdGlvbkRpY3Rpb25hcnkuRk9SR09UX1BBU1NXT1JEX0ZPUk1fX01FU1NBR0VfUkVNRU1CRVJfUEFTU1dPUkR9fVxyXG4gICAgPGJ1dHRvbiBjbGFzcz1cImF1dGhsaXRlLWJ1dHRvbi1hcy1saW5rXCJcclxuICAgICAgcm91dGVyTGluaz1cIi9TaWduaW5Gb3JtXCI+e3t0cmFuc2xhdGlvbkRpY3Rpb25hcnkuRk9SR09UX1BBU1NXT1JEX0ZPUk1fX0FDVElPTl9TSUdOSU59fTwvYnV0dG9uPlxyXG4gIDwvZGl2PlxyXG48L2Zvcm0+Il19