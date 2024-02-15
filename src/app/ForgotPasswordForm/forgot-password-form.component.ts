import { Component, Input } from '@angular/core';
import { TranslationDictionary, DEFAULT_TRANSLATION_DICTIONARY, TranslationName } from '../types/TranslationDictionaryType';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-password-form',
  templateUrl: './forgot-password-form.component.html',
  styleUrls: ['./forgot-password-form.component.scss'],
})
export class ForgotPasswordFormComponent{
  
  @Input() translationDictionary: TranslationDictionary = DEFAULT_TRANSLATION_DICTIONARY;

  @Input() translationName!: TranslationName;

  forgotPasswordForm!: FormGroup;

  constructor(private fb:FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }
  initForm(): void {
    this.forgotPasswordForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  get forgotPasswordGreetingTitle(): string {
    return this.translationDictionary.FORGOT_PASSWORD_FORM__GREETING_TITLE;
  }
  get forgotPasswordGreetingSubtitle(): string {
    return this.translationDictionary.FORGOT_PASSWORD_FORM__GREETING_SUBTITLE;
  }
  get forgotPasswordFormLabelEmail(): string {
    return this.translationDictionary.FORGOT_PASSWORD_FORM__LABEL_EMAIL;
  }
  get forgotPasswordFormUsernameErrorMessage(): string{
    return this.translationDictionary['FORGOT_PASSWORD_ERROR__BLANK_USERNAME'];
  }
  get forgotPasswordFormInvalidUsername(): string{
    return this.translationDictionary.FORGOT_PASSWORD_ERROR__INVALID_USERNAME;
  }
  get forgotPasswordFormUserNotFound(): string{
    return this.translationDictionary.FORGOT_PASSWORD_ERROR__USER_NOT_FOUND;
  }
  onSubmit(): void {
    if (this.forgotPasswordForm.invalid) {
      this.forgotPasswordForm.markAllAsTouched();
      return;
    }
}
}