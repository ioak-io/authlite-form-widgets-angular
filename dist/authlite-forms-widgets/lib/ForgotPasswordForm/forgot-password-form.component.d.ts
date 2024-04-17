import { TranslationDictionary, TranslationName } from '../types/TranslationDictionaryType';
import { FormBuilder, FormGroup } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class ForgotPasswordFormComponent {
    private fb;
    translationDictionary: TranslationDictionary;
    translationName: TranslationName;
    forgotPasswordForm: FormGroup;
    passwordResetLinkSent: boolean;
    email: any;
    constructor(fb: FormBuilder);
    ngOnInit(): void;
    initForm(): void;
    get forgotPasswordGreetingTitle(): string;
    get forgotPasswordGreetingSubtitle(): string;
    get forgotPasswordFormLabelEmail(): string;
    get forgotPasswordFormUsernameErrorMessage(): string;
    get forgotPasswordFormInvalidUsername(): string;
    get forgotPasswordFormUserNotFound(): string;
    onSubmit(): void;
    isUserExists(email: string): boolean;
    sendPasswordResetLink(email: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ForgotPasswordFormComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ForgotPasswordFormComponent, "lib-forgot-password-form", never, { "translationDictionary": { "alias": "translationDictionary"; "required": false; }; "translationName": { "alias": "translationName"; "required": false; }; }, {}, never, never, false, never>;
}
