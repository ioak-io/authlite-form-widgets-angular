import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DEFAULT_TRANSLATION_DICTIONARY, TranslationDictionary, TranslationName, getTranslation } from '../types/TranslationDictionaryType';
import { FormBuilder, FormGroup, Validators, AbstractControl, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
//import { AuthService } from "../services/AuthenticationService";
//import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss'],
})
export class SignupFormComponent implements OnInit {

  @Input() translationDictionary: TranslationDictionary = DEFAULT_TRANSLATION_DICTIONARY;

  @Input() translationName!: TranslationName;

  signupForm!: FormGroup;

  showPassword: boolean = true;

  togglePassword() {
    this.showPassword = !this.showPassword
  }

  constructor(private fb: FormBuilder, private router: Router, /*private http: HttpClient, public authService: AuthService*/) { }


  /*onSignupForm(signupForm: NgForm) {
    if (signupForm.invalid) {
      return;
    }
    this.authService.CreateUser(
      signupForm.value.given_name,
      signupForm.value.family_name,
      signupForm.value.email,
      signupForm.value.password,
      signupForm.value.retype_password);
  }*/
  ngOnInit(): void {
    this.initForm();
  }
  initForm(): void {
    this.signupForm = this.fb.group({
      given_name: ['', Validators.required],
      family_name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      retype_password: ['', Validators.required],
    },
      {
        validators: this.passwordMatchValidator,
      });
  }

  get signupGreetingTitle(): string {
    return this.translationDictionary.SIGNUP_FORM__GREETING_TITLE;
  }
  get signupGreetingSubtitle(): string {
    return this.translationDictionary.SIGNUP_FORM__GREETING_SUBTITLE;
  }
  get signupFormLabelGivenname(): string {
    return this.translationDictionary.SIGNUP_FORM__LABEL_GIVENNAME;
  }
  get signupFormLabelFamilyname(): string {
    return this.translationDictionary.SIGNUP_FORM__LABEL_FAMILYNAME;
  }
  get signupFormLabelUsername(): string {
    return this.translationDictionary.SIGNUP_FORM__LABEL_EMAIL;
  }
  get signupFormLabelPassword(): string {
    return this.translationDictionary.SIGNUP_FORM__LABEL_PASSWORD;
  }
  get signupFormLabelRetypePassword(): string {
    return this.translationDictionary.SIGNUP_FORM__LABEL_RETYPEPASSWORD;
  }
  get signupFormGivennameErrorMessage(): string {
    return this.translationDictionary.SIGNUP_ERROR__BLANK_GIVENNAME;
  }
  get signupFormFamilynameErrorMessage(): string {
    return this.translationDictionary.SIGNUP_ERROR__BLANK_FAMILYNAME;
  }
  get signupFormUsernameErrorMessage(): string {
    return this.translationDictionary.SIGNUP_ERROR__BLANK_USERNAME;
  }
  get signupFormInvalidUsername(): string {
    return this.translationDictionary.SIGNUP_ERROR__INVALID_USERNAME;
  }
  get signupFormPasswordErrorMessage(): string {
    return this.translationDictionary.SIGNUP_ERROR__BLANK_PASSWORD;
  }
  get signupFormReTypePasswordErrorMessage(): string {
    return this.translationDictionary.SIGNUP_ERROR__BLANK_RETYPEPASSWORD;
  }
  get signupFormReTypePasswordDoesnotMatch(): string {
    const retypePassword = this.signupForm.get('retype_password');
    return this.translationDictionary.SIGNUP_ERROR__PASSWORDS_DO_NOT_MATCH;
  }
  passwordMatchValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const password = control.get('password');
    const retypePassword = control.get('retype_password');

    if (password && retypePassword && password.value !== retypePassword.value) {
      return { 'passwordMismatch': true };
    }
    return null;
  }
  onSubmit(): void {
    if (this.signupForm.invalid) {
      this.signupForm.markAllAsTouched();
      return;
    }
    else {
      console.log('Signup Successful:', this.signupForm.value);
      //this.router.navigate(['/signup-success-page']);
    }
  }
}

