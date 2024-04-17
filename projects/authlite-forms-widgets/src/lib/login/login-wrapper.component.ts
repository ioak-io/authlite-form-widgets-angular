
import { Component, Input} from '@angular/core';
import { TranslationDictionary, TranslationName, getTranslation } from '../types/TranslationDictionaryType';

@Component({
  selector: 'lib-login',
  templateUrl: './login-wrapper.component.html',
  styleUrls: ['./style.css'],
})

export class LoginWrapperComponent{
  @Input() translationDictionary!: TranslationDictionary;
  @Input() signinGreetingTitle!: string;
  @Input() signinGreetingSubtitle!: string;
  @Input() signinFormLabelUsername!: string;
  @Input() signinFormLabelPassword!: string;
  @Input() signupGreetingTitle!: string;
  @Input() signupGreetingSubtitle!: string;
  @Input() signupFormLabelGivenname!: string;
  @Input() signupFormLabelFamilyname!: string;
  @Input() signupFormLabelEmail!: string;
  @Input() signupFormLabelPassword!: string;
  @Input() signupFormLabelRetypePassword!: string;
  @Input() forgotPasswordGreetingTitle!: string;
  @Input() forgotPasswordGreetingSubtitle!: string;
  @Input() forgotPasswordFormLabelEmail!: string;
  @Input() resendVerifyLinkFormGreetingTitle!:string;
  @Input() resendVerifyLinkFormGreetingSubtitle!: string;
  @Input() resendVerifyLinkFormLabelEmail!:string;
  @Input() heading: string = '';
  @Input() children: any;
}
