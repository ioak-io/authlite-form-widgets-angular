import { Component, Input, OnInit } from '@angular/core';
import { DEFAULT_TRANSLATION_DICTIONARY, TranslationDictionary, TranslationName, getTranslation } from '../types/TranslationDictionaryType';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-resend-verify-link-form',
  templateUrl: './resend-verify-link-form.component.html',
  styleUrls: ['./resend-verify-link-form.component.scss'],
})
export class ResendVerifyLinkFormComponent implements OnInit {

  @Input() translationDictionary: TranslationDictionary = DEFAULT_TRANSLATION_DICTIONARY;

  @Input() translationName!: TranslationName;

  resendVerifyLinkForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }
  initForm(): void {
    this.resendVerifyLinkForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }
  get resendVerifyLinkFormGreetingTitle(): string {
    return this.translationDictionary.RESEND_VERIFY_LINK_FORM__GREETING_TITLE;
  }
  get resendVerifyLinkFormGreetingSubtitle(): string {
    return this.translationDictionary.RESEND_VERIFY_LINK_FORM__GREETING_SUBTITLE;
  }
  get resendVerifyLinkFormLabelEmail(): string {
    return this.translationDictionary.RESEND_VERIFY_LINK_FORM__LABEL_EMAIL;
  }
  get resendVerifyLinkFormUsernameErrorMessage(): string {
    return this.translationDictionary['RESEND_VERIFY_LINK_ERROR__BLANK_USERNAME'];
  }
  get resendVerifyLinkFormInvalidUsername(): string {
    return this.translationDictionary.RESEND_VERIFY_LINK_ERROR__INVALID_USERNAME;
  }
  get resendVerifyLinkFormUserNotFound(): string {
    return this.translationDictionary.RESEND_VERIFY_LINK_ERROR__USER_NOT_FOUND;
  }
  onSubmit(): void {
    console.log('onSubmit')
    if (this.resendVerifyLinkForm.invalid) {
      this.resendVerifyLinkForm.markAllAsTouched();
      return;
    }
    const enteredEmail = this.resendVerifyLinkForm.value.email;

    if (!this.isUserExists(enteredEmail)) {
      this.resendVerifyLinkForm.setErrors({ userNotFound: true});
    }
    else {
      console.log('reset link sent to:', this.resendVerifyLinkForm.value);
    }
  }
  private isUserExists(_email: string): boolean {
    return false;
  }
}
