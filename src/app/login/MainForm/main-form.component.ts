
import { Component, Input, Output, EventEmitter } from '@angular/core';
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
export class MainFormComponent {
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
  @Input() clearErrorMessages: any;
  @Input() translationDictionary!: TranslationDictionary;
  @Input() view!: PageView;
  @Input() changeView: any;
  PageView: any;
  //@Input() PageView: any;

  ngOnInit(): void {
    
    if (this.signinFormErrorMessages?.unverifiedEmail) {
      this.changeView(PageView.resendverifyemail);
    }
  }

  changeViewAndClear(view: PageView): void {
    this.changeView(view);
    this.clearErrorMessages();
  }
}