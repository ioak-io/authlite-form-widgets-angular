import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TranslationDictionary, DEFAULT_TRANSLATION_DICTIONARY, } from '../../types/TranslationDictionaryType';
import PageView from '../../types/PageViewType';
import SigninFormErrorMessages from '../../types/SigninFormErrorMessagesType';
import SignupFormErrorMessages from '../../types/SignupFormErrorMessagesType';
import ForgotPasswordFormErrorMessages from '../../types/ForgotPasswordFormErrorMessagesType';
import ResendVerifyLinkFormErrorMessages from '../../types/ResendVerifyLinkFormErrorMessagesType';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent{
  @Input() successPage: 'signin' | 'signup' | 'forgotpassword' | 'resendverifyemail' = 'signin';
  @Input() view!: PageView;
  @Input() signinFormErrorMessages!: SigninFormErrorMessages;
  @Input() signupFormErrorMessages!: SignupFormErrorMessages;
  @Input() forgotPasswordFormErrorMessages!: ForgotPasswordFormErrorMessages;
  @Input() resendVerifyLinkFormErrorMessages!: ResendVerifyLinkFormErrorMessages;
  @Input() translationDictionary: TranslationDictionary = DEFAULT_TRANSLATION_DICTIONARY;
  @Input() changeView!: any;
  @Output() onSignin = new EventEmitter<any>();
  @Output() onSignup = new EventEmitter<any>();
  @Output() onForgotPassword = new EventEmitter<any>();
  @Output() onResendVerifyLink = new EventEmitter<any>();
  @Output() onPlaceholder = new EventEmitter<any>();
  @Output() clearErrorMessages = new EventEmitter<void>();

  @Input() src!: string;
  @Input() signinheading!: string;
  @Input() signupheading!: string;
  @Input() forgotpasswordheading!: string;
  @Input() resendverifyemailheading!: string;

  @Input() signindescription!: string;
  @Input() signupdescription!: string;
  @Input() forgotpassworddescription!: string;
  @Input() resendverifyemaildescription!: string;

  @Input() signinfootnote!: string;
  @Input() signupfootnote!: string;
  @Input() forgotpasswordfootnote!: string;
  @Input() resendverifyemailfootnote!: string;

  handleSignin(event: any): void {
    this.onSignin.emit(event);
  }

  handleSignup(event: any): void {
    this.onSignup.emit(event);
  }

  handleForgotPassword(event: any): void {
    this.onForgotPassword.emit(event);
  }

  handleResendVerifyLink(event: any): void {
    this.onResendVerifyLink.emit(event);
  }

  handlePlaceholder(event: any): void {
    this.onPlaceholder.emit(event);
  }

  handleChangeView(event: any): void {
    this.changeView.emit(event);
  }
}
