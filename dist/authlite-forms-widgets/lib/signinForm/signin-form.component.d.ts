import { OnInit } from '@angular/core';
import { TranslationDictionary, TranslationName } from '../types/TranslationDictionaryType';
import { FormBuilder, FormGroup } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class SigninFormComponent implements OnInit {
    private fb;
    translationDictionary: TranslationDictionary;
    translationName: TranslationName;
    signinForm: FormGroup;
    showPassword: boolean;
    togglePassword(): void;
    constructor(fb: FormBuilder);
    ngOnInit(): void;
    initForm(): void;
    get signinGreetingTitle(): string;
    get signinGreetingSubtitle(): string;
    get signinFormLabelUsername(): string;
    get signinFormLabelPassword(): string;
    get signinFormUsernameErrorMessage(): string;
    get signinFormPasswordErrorMessage(): string;
    get signinFormInvalidUsername(): string;
    get signinFormIncorrectPassword(): string;
    get signinFormUserNotFound(): string;
    onSubmit(): void;
    isUserExists(email: string, password: string): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<SigninFormComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SigninFormComponent, "lib-signin-form", never, { "translationDictionary": { "alias": "translationDictionary"; "required": false; }; "translationName": { "alias": "translationName"; "required": false; }; }, {}, never, never, false, never>;
}
