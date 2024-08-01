import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TranslationDictionary, DEFAULT_TRANSLATION_DICTIONARY,} from '../../types/TranslationDictionaryType';
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
  @Input() view!: PageView;
  @Input() signinFormErrorMessages!: SigninFormErrorMessages;
  @Input() signupFormErrorMessages!: SignupFormErrorMessages;
  @Input() forgotPasswordFormErrorMessages!: ForgotPasswordFormErrorMessages;
  @Input() resendVerifyLinkFormErrorMessages!: ResendVerifyLinkFormErrorMessages;
  @Input() translationDictionary: TranslationDictionary = DEFAULT_TRANSLATION_DICTIONARY;
  @Input() children!: any;
  @Output() onSignin = new EventEmitter<any>();
  @Output() onSignup = new EventEmitter<any>();
  @Output() onForgotPassword = new EventEmitter<any>();
  @Output() onResendVerifyLink = new EventEmitter<any>();
  @Output() onPlaceholder = new EventEmitter<any>();
  @Output() clearErrorMessages = new EventEmitter<void>();
  @Output() changeView = new EventEmitter<any>();
  @Input() logo!: string;

  handleSignin(event: any) {
    this.onSignin.emit(event);
  }

  handleSignup(event: any) {
    this.onSignup.emit(event);
  }

  handleForgotPassword(event: any) {
    this.onForgotPassword.emit(event);
  }

  handleResendVerifyLink(event: any) {
    this.onResendVerifyLink.emit(event);
  }

  handlePlaceholder(event: any): void{
    this.onPlaceholder.emit(event);
  }

  handleChangeView(event: any) {
    this.changeView.emit(event);
  }
}
