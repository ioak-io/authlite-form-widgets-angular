import { Component, Input} from '@angular/core';
import { TranslationDictionary } from '../../types/TranslationDictionaryType';
import PageView from '../../types/PageViewType';
import SigninFormErrorMessages from '../../types/SigninFormErrorMessagesType';
import SignupFormErrorMessages from '../../types/SignupFormErrorMessagesType';
import ForgotPasswordFormErrorMessages from '../../types/ForgotPasswordFormErrorMessagesType';
import ResendVerifyLinkFormErrorMessages from '../../types/ResendVerifyLinkFormErrorMessagesType';

@Component({
  selector: 'app-design-one',
  templateUrl: './design-one.component.html',
  styleUrls: ['./design-one.component.scss'],
})
export class DesignOneComponent{
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
  @Input() dictionary!: TranslationDictionary;
  @Input() view!: PageView;
  @Input() changeView: any;

  ngOnInit(): void {
    
    if (this.signinFormErrorMessages?.unverifiedEmail) {
      this.changeView(PageView.resendverifyemail);
    }
  }
}