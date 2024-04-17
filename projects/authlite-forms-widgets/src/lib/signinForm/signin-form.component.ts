import { Component, Input, OnInit } from '@angular/core';
import { TranslationDictionary, TranslationName, getTranslation, DEFAULT_TRANSLATION_DICTIONARY } from '../types/TranslationDictionaryType';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'lib-signin-form',
  templateUrl: './signin-form.component.html',
  styleUrls: ['./signin-form.component.scss'],
})
export class SigninFormComponent implements OnInit {

  @Input() translationDictionary: TranslationDictionary = DEFAULT_TRANSLATION_DICTIONARY;

  @Input() translationName!: TranslationName;

  signinForm!: FormGroup;

  showPassword: boolean = true; //password eye icon functionality
    
  togglePassword() {
    this.showPassword = !this.showPassword
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.signinForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }
  get signinGreetingTitle(): string {
    return this.translationDictionary.SIGNIN_FORM__GREETING_TITLE;
  }
  get signinGreetingSubtitle(): string {
    return this.translationDictionary.SIGNIN_FORM__GREETING_SUBTITLE;
  }
  get signinFormLabelUsername(): string {
    return this.translationDictionary.SIGNIN_FORM__LABEL_USERNAME;
  }
  get signinFormLabelPassword(): string {
    return this.translationDictionary.SIGNIN_FORM__LABEL_PASSWORD;
  }
  get signinFormUsernameErrorMessage(): string {
    return this.translationDictionary.SIGNIN_ERROR__BLANK_USERNAME;
  }
  get signinFormPasswordErrorMessage(): string {
    return this.translationDictionary.SIGNIN_ERROR__BLANK_PASSWORD;
  }
  get signinFormInvalidUsername(): string {
    return this.translationDictionary.SIGNIN_ERROR__INVALID_USERNAME;
  }
  get signinFormIncorrectPassword(): string {
    return this.translationDictionary.SIGNIN_ERROR__INCORRECT_PASSWORD;
  }
  get signinFormUserNotFound(): string {
    return this.translationDictionary.SIGNIN_ERROR__USER_NOT_FOUND;
  }
  onSubmit(): void {
    console.log('onSubmit')
    if (this.signinForm.invalid) {
      this.signinForm.markAllAsTouched();
      return;
    }
    const enteredEmail = this.signinForm.value.email;
    const enteredPassword = this.signinForm.value.password;

    if (!this.isUserExists(enteredEmail, enteredPassword)) {
      this.signinForm.setErrors({ userNotFound: true });
    }
    else {
      console.log('Login Successful', this.signinForm.value);
    }
  }
  isUserExists(email: string, password: string): boolean {
    return false;
  }
}