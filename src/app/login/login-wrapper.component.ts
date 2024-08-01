import { Component, Input, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/AuthenticationService';
import SigninFormErrorMessages from '../types/SigninFormErrorMessagesType';
import SignupFormErrorMessages from '../types/SignupFormErrorMessagesType';
import ForgotPasswordFormErrorMessages from '../types/ForgotPasswordFormErrorMessagesType';
import ResendVerifyLinkFormErrorMessages from '../types/ResendVerifyLinkFormErrorMessagesType';
import PageView from '../types/PageViewType';
import { DEFAULT_TRANSLATION_DICTIONARY, TranslationDictionary } from '../types/TranslationDictionaryType';

@Component({
  selector: 'app-login-wrapper',
  templateUrl: './login-wrapper.component.html',
  styleUrls: ['./style.css']
})
export class LoginWrapperComponent implements OnInit {

  @Input() translationDictionary: TranslationDictionary = DEFAULT_TRANSLATION_DICTIONARY;
  PageView: any;
  view: PageView = PageView.signin;
  successPage: 'signin' | 'signup' | 'forgotpassword' | 'resendverifyemail' | null = null;
  signinFormErrorMessages: SigninFormErrorMessages = {};
  signupFormErrorMessages: SignupFormErrorMessages = {};
  forgotPasswordFormErrorMessages: ForgotPasswordFormErrorMessages = {};
  resendVerifyLinkFormErrorMessages: ResendVerifyLinkFormErrorMessages = {};
  changeView: any;

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
  }

  onSignin(data: any): void {
    this.authenticationService.signin('production', 228, data).subscribe((response: any) => {
      if (response.outcome === 'SUCCESS') {
        this.view = PageView.placeholder;
        this.successPage = 'signin';
        console.log(this.successPage);
      }
      this.signinFormErrorMessages = response.errorMessages;
    });
  }

  onSignup(data: any): void {
    this.authenticationService.signup('production', 228, data).subscribe((response: any) => {
      console.log(response);
      if (response.outcome === 'SUCCESS') {
        this.view = PageView.placeholder;
        this.successPage = 'signup';
      }
      this.signupFormErrorMessages = response.errorMessages;
    });
  }

  onForgotPassword(data: any): void {
    this.authenticationService.ForgotPasswordForm('production', 228, data).subscribe((response: any) => {
      console.log(response);
      if (response.outcome === 'SUCCESS') {
        this.view = PageView.placeholder;
        this.successPage = 'forgotpassword';
      }
      this.forgotPasswordFormErrorMessages = response.errorMessages;
    });
  }

  onResendVerifyLink(data: any): void {
    this.authenticationService.resendVerifyLink('production', 228, data).subscribe((response: any) => {
      console.log(response);
      if (response.outcome === 'SUCCESS') {
        this.view = PageView.placeholder;
        this.successPage = 'resendverifyemail';
      }
      this.resendVerifyLinkFormErrorMessages = response.errorMessages;
    });
  }

  clearErrorMessages() {
    this.signinFormErrorMessages = {};
    this.signupFormErrorMessages = {};
  }

  navigateToSignin(): void {
    this.view = PageView.signin;
  }

  navigateToSignup(): void {
    this.view = PageView.signup;
  }

  navigateToForgotPassword(): void {
    this.view = PageView.forgotpassword;
  }

  navigateToResendVerifyLink(): void {
    this.view = PageView.resendverifyemail;
  }

}