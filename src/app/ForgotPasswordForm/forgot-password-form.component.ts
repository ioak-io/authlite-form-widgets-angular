import { Component, Input } from '@angular/core';
import { TranslationDictionary } from '../types/TranslationDictionaryType';

@Component({
  selector: 'app-forgot-password-form',
  templateUrl: './forgot-password-form.component.html',
  styleUrls: ['./forgot-password-form.component.scss'],
})
export class ForgotPasswordFormComponent{
  
  @Input() translationDictionary!: TranslationDictionary;
  
  @Input() DEFAULT_TRANSLATION_DICTIONARY!: TranslationDictionary;

  get forgotPasswordGreetingTitle(): string {
    return this.translationDictionary.FORGOT_PASSWORD_FORM__GREETING_TITLE;
  }
  get forgotPasswordGreetingSubtitle(): string {
    return this.translationDictionary.FORGOT_PASSWORD_FORM__GREETING_SUBTITLE;
  }
  get forgotPasswordFormLabelEmail(): string {
    return this.translationDictionary.FORGOT_PASSWORD_FORM__LABEL_EMAIL;
  }
}