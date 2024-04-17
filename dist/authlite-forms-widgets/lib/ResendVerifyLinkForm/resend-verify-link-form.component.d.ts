import { OnInit } from '@angular/core';
import { TranslationDictionary, TranslationName } from '../types/TranslationDictionaryType';
import { FormBuilder, FormGroup } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class ResendVerifyLinkFormComponent implements OnInit {
    private fb;
    translationDictionary: TranslationDictionary;
    translationName: TranslationName;
    resendVerifyLinkForm: FormGroup;
    constructor(fb: FormBuilder);
    ngOnInit(): void;
    initForm(): void;
    get resendVerifyLinkFormGreetingTitle(): string;
    get resendVerifyLinkFormGreetingSubtitle(): string;
    get resendVerifyLinkFormLabelEmail(): string;
    get resendVerifyLinkFormUsernameErrorMessage(): string;
    get resendVerifyLinkFormInvalidUsername(): string;
    get resendVerifyLinkFormUserNotFound(): string;
    onSubmit(): void;
    isUserExists(_email: string): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<ResendVerifyLinkFormComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ResendVerifyLinkFormComponent, "lib-resend-verify-link-form", never, { "translationDictionary": { "alias": "translationDictionary"; "required": false; }; "translationName": { "alias": "translationName"; "required": false; }; }, {}, never, never, false, never>;
}
