import { Component, Input, Output, EventEmitter } from '@angular/core';
import PageView from '../../types/PageViewType';  // Make sure this is the correct path
import SigninFormErrorMessages from '../../types/SigninFormErrorMessagesType'; // Correct path
import SignupFormErrorMessages from '../../types/SignupFormErrorMessagesType'; // Correct path
import ForgotPasswordFormErrorMessages from '../../types/ForgotPasswordFormErrorMessagesType'; // Correct path
import ResendVerifyLinkFormErrorMessages from '../../types/ResendVerifyLinkFormErrorMessagesType'; // Correct path
import { TranslationDictionary, DEFAULT_TRANSLATION_DICTIONARY } from '../../types/TranslationDictionaryType'; // Correct path

@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.scss']
})
export class MainFormComponent {
  @Input() view!: PageView;
  @Input() signinFormErrorMessages!: SigninFormErrorMessages;
  @Input() signupFormErrorMessages!: SignupFormErrorMessages;
  @Input() forgotPasswordFormErrorMessages!: ForgotPasswordFormErrorMessages;
  @Input() resendVerifyLinkFormErrorMessages!: ResendVerifyLinkFormErrorMessages;
  @Input() translationDictionary: TranslationDictionary = DEFAULT_TRANSLATION_DICTIONARY;
  @Input() logo!: string;
  PageView = PageView;
  changeView: any;
  clearErrorMessages: any;
  @Output() onSignin = new EventEmitter<any>();
  @Output() onSignup = new EventEmitter<any>();
  @Output() onForgotPassword = new EventEmitter<any>();
  @Output() onResendVerifyLink = new EventEmitter<any>();
  @Output() onPlaceholder = new EventEmitter<any>();  

  ngOnInit(): void {
    if (this.signinFormErrorMessages?.unverifiedEmail) {
      this.changeView = PageView.resendverifyemail;
    }
  }

  handleChangeView(view: PageView): void {
    this.view = view;
    this.clearErrorMessages();
  }

  handleSignin(event: any): void{
    this.handleChangeView(PageView.signin);
  }

  handleSignup(event: any): void {
    this.handleChangeView(PageView.signup);
  }

  handleForgotPassword(event: any) {
    this.handleChangeView(PageView.forgotpassword);
  }

  handleResendVerifyEmail(event: any) {
    this.handleChangeView(PageView.resendverifyemail);
  }

  handlePlaceholder(event: any) {
    this.handleChangeView(PageView.placeholder);
  }
}

