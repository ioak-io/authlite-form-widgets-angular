
import { Component, Input, OnInit } from '@angular/core';
import { TranslationDictionary } from '../../types/TranslationDictionaryType';
import PageView from '../../types/PageViewType';
import SigninFormErrorMessages from '../../types/SigninFormErrorMessagesType';
import SignupFormErrorMessages from '../../types/SignupFormErrorMessagesType';
import ForgotPasswordFormErrorMessages from '../../types/ForgotPasswordFormErrorMessagesType';
import ResendVerifyLinkFormErrorMessages from '../../types/ResendVerifyLinkFormErrorMessagesType';

@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.scss'],
})
export class MainFormComponent implements OnInit {
  @Input() logo: any;
  @Input() placeholder: any;
  @Input() onSignin: any;
  @Input() onSignup: any;
  @Input() onForgotPassword: any;
  @Input() onResendVerifyLink: any;
  @Input() signinFormErrorMessages!: SigninFormErrorMessages;
  @Input() signupFormErrorMessages!: SignupFormErrorMessages;
  @Input() forgotPasswordFormErrorMessages!: ForgotPasswordFormErrorMessages;
  @Input() resendVerifyLinkFormErrorMessages!: ResendVerifyLinkFormErrorMessages;
  @Input() translationDictionary!: TranslationDictionary;
  @Input() view!: PageView;
  PageView = PageView;
  changeView: any;

  ngOnInit(): void {
    if (this.signinFormErrorMessages?.unverifiedEmail) {
      this.changeView = PageView.resendverifyemail;
    }
  }

  handleChangeView(view: PageView): void {
    this.view = view;
    this.clearErrorMessages();
  }

  handleSignup(): void {
    this.handleChangeView(PageView.signup);
  }

  handleSignin(): void {
    this.handleChangeView(PageView.signin);
  }

  handleForgotPassword(): void {
    this.handleChangeView(PageView.forgotpassword);
  }

  handleResendVerifyEmail(): void {
    this.handleChangeView(PageView.resendverifyemail);
  }

  clearErrorMessages(): void {
    this.signinFormErrorMessages = {};
    this.signupFormErrorMessages = {};
    this.forgotPasswordFormErrorMessages = {};
    this.resendVerifyLinkFormErrorMessages = {};
  }
}
