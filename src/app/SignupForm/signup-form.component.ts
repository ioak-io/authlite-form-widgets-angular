import { Component, Input} from '@angular/core';
import { TranslationDictionary, TranslationName, getTranslation } from '../types/TranslationDictionaryType';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss'],
})
export class SignupFormComponent {

  @Input() translationDictionary!: TranslationDictionary;

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
    return this.translationDictionary.SIGNUP_FORM__LABEL_GIVENNAME;
  }
  get signupFormLabelEmail() : string{
    return this.translationDictionary.SIGNUP_FORM__LABEL_EMAIL;
  }
  get signupFormLabelPassword() : string{
    return this.translationDictionary.SIGNUP_FORM__LABEL_PASSWORD;
  }
  get signupFormLabelRetypePassword() : string{
    return this.translationDictionary.SIGNUP_FORM__LABEL_RETYPEPASSWORD;
  }
}
