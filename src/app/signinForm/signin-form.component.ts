import { Component, Input } from '@angular/core';
import { TranslationDictionary, TranslationName, getTranslation,DEFAULT_TRANSLATION_DICTIONARY } from '../types/TranslationDictionaryType';

@Component({
    selector: 'app-signin-form',
    templateUrl:'./signin-form.component.html',
    styleUrls: ['./signin-form.component.scss'],
})
export class SigninFormComponent{

  @Input() translationDictionary: TranslationDictionary = DEFAULT_TRANSLATION_DICTIONARY;

  @Input() translationName!: TranslationName;

  get signinGreetingTitle(): string {
    return this.translationDictionary.SIGNIN_FORM__GREETING_TITLE;
  }
  get signinGreetingSubtitle(): string {
    return this.translationDictionary.SIGNIN_FORM__GREETING_SUBTITLE;
  }
  get signinFormLabelUsername(): string {
    return this.translationDictionary.SIGNIN_FORM__LABEL_USERNAME;
  }
  get signinFormLabelPassword(): string{
    return this.translationDictionary.SIGNIN_FORM__LABEL_PASSWORD;
  }
}