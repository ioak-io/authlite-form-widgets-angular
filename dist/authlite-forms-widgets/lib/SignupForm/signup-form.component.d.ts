import { OnInit } from '@angular/core';
import { TranslationDictionary, TranslationName } from '../types/TranslationDictionaryType';
import { FormBuilder, FormGroup, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import * as i0 from "@angular/core";
export declare class SignupFormComponent implements OnInit {
    private fb;
    private router;
    translationDictionary: TranslationDictionary;
    translationName: TranslationName;
    signupForm: FormGroup;
    showPassword: boolean;
    togglePassword(): void;
    constructor(fb: FormBuilder, router: Router);
    ngOnInit(): void;
    initForm(): void;
    get signupGreetingTitle(): string;
    get signupGreetingSubtitle(): string;
    get signupFormLabelGivenname(): string;
    get signupFormLabelFamilyname(): string;
    get signupFormLabelUsername(): string;
    get signupFormLabelPassword(): string;
    get signupFormLabelRetypePassword(): string;
    get signupFormGivennameErrorMessage(): string;
    get signupFormFamilynameErrorMessage(): string;
    get signupFormUsernameErrorMessage(): string;
    get signupFormInvalidUsername(): string;
    get signupFormPasswordErrorMessage(): string;
    get signupFormReTypePasswordErrorMessage(): string;
    get signupFormReTypePasswordDoesnotMatch(): string;
    passwordMatchValidator(control: AbstractControl): {
        [key: string]: boolean;
    } | null;
    onSubmit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SignupFormComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SignupFormComponent, "lib-signup-form", never, { "translationDictionary": { "alias": "translationDictionary"; "required": false; }; "translationName": { "alias": "translationName"; "required": false; }; }, {}, never, never, false, never>;
}
