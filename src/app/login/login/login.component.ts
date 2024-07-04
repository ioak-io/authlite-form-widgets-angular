import { Component, Input, OnInit } from '@angular/core';
import { DEFAULT_TRANSLATION_DICTIONARY, TranslationDictionary, TranslationName, getTranslation } from '../../types/TranslationDictionaryType';
import PageView from '../../types/PageViewType';
import SigninFormErrorMessages from '../../types/SigninFormErrorMessagesType';
import SignupFormErrorMessages from '../../types/SignupFormErrorMessagesType';
import ForgotPasswordFormErrorMessages from '../../types/ForgotPasswordFormErrorMessagesType';
import ResendVerifyLinkFormErrorMessages from '../../types/ResendVerifyLinkFormErrorMessagesType';
import { AuthenticationService } from '../../services/AuthenticationService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})

export class LoginComponent implements OnInit {
  @Input() logo: any = null;
  @Input() placeholder: any = null;
  @Input() onSignin: any;
  @Input() onSignup: any;
  @Input() onForgotPassword: any;
  @Input() onResendVerifyLink: any;
  @Input() translationDictionary: TranslationDictionary = DEFAULT_TRANSLATION_DICTIONARY;
  @Input() signinFormErrorMessages!: SigninFormErrorMessages;
  @Input() signupFormErrorMessages!: SignupFormErrorMessages;
  @Input() forgotPasswordFormErrorMessages!: ForgotPasswordFormErrorMessages;
  @Input() resendVerifyLinkFormErrorMessages!: ResendVerifyLinkFormErrorMessages;
  @Input() clearErrorMessages: any;
  @Input() changeView: any;
  @Input() children: any;
  @Input() view!: PageView;

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
    this.processChildren();
  }

  processChildren(): void {
    if (!Array.isArray(this.children)) {
      this.children = [this.children];
    }

    this.children.forEach((item: any) => {
      if (item?.type?.displayName === 'Logo' || item?.type?.name === 'Logo') {
        this.logo = item;
      }
      if (item?.type?.displayName === 'Placeholder' || item?.type?.name === 'Placeholder') {
        this.placeholder = item;
      }
    });
  }

  navigateToSignin(): void {
    this.changeView(PageView.signin);
  }

  navigateToSignup(): void {
    this.changeView(PageView.signup);
  }

  navigateToForgotPassword(): void {
    this.onForgotPassword();
  }

  navigateToResendVerifyLink(): void {
    this.onResendVerifyLink();
  }

}