import { Component, Input, OnInit } from '@angular/core';
import { TranslationDictionary, TranslationName, getTranslation, DEFAULT_TRANSLATION_DICTIONARY } from '../types/TranslationDictionaryType';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin-form',
  templateUrl: './signin-form.component.html',
  styleUrls: ['./signin-form.component.scss'],
})
export class SigninFormComponent implements OnInit {

  @Input() translationDictionary: TranslationDictionary = DEFAULT_TRANSLATION_DICTIONARY;

  @Input() translationName!: TranslationName;

  signinForm!: FormGroup;
  show: boolean = true;
  changeType: boolean = true;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void{
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
    //return this.translationDictionary.SIGNIN_ERROR__BLANK_USERNAME;
    const email = this.signinForm.get('email');
    return email?.hasError('required') ? this.translationDictionary.SIGNIN_ERROR__BLANK_USERNAME : email?.hasError('email') ? this.translationDictionary.SIGNIN_ERROR__INVALID_USERNAME : '';
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
    if (this.signinForm.invalid) {
      this.signinForm.markAllAsTouched();
      return;
    }
    const enteredEmail = this.signinForm.value.email;
    const enteredPassword = this.signinForm.value.password;

    const userData = {
      email: 'user@example.com',
      password: 'password123',
    };

    if (enteredEmail !== userData.email) {
      this.signinForm.setErrors({ userNotFound: true });
    } else if (enteredPassword !== userData.password) {
      this.signinForm.setErrors({ incorrectPassword: true });
    } else {
      console.log('Login successful');
    }
  }
  view() {
    this.show = !this.show
    this.changeType = !this.changeType
  }
}