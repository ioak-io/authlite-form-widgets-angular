import { Component, Input, Output, EventEmitter } from '@angular/core';
import PageView from '../../types/PageViewType';
import SigninFormErrorMessages from '../../types/SigninFormErrorMessagesType';
import SignupFormErrorMessages from '../../types/SignupFormErrorMessagesType';
import ForgotPasswordFormErrorMessages from '../../types/ForgotPasswordFormErrorMessagesType';
import ResendVerifyLinkFormErrorMessages from '../../types/ResendVerifyLinkFormErrorMessagesType';
import { TranslationDictionary, DEFAULT_TRANSLATION_DICTIONARY } from '../../types/TranslationDictionaryType';

@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.scss']
})
export class MainFormComponent {
  @Input() successPage: 'signin' | 'signup' | 'forgotpassword' | 'resendverifyemail' = 'signin';
  @Input() view!: PageView;
  @Input() translationDictionary: TranslationDictionary = DEFAULT_TRANSLATION_DICTIONARY;
  @Input() PageView = PageView;
  @Input() changeView: any;

  @Input() signinFormErrorMessages!: SigninFormErrorMessages;
  @Input() signupFormErrorMessages!: SignupFormErrorMessages;
  @Input() forgotPasswordFormErrorMessages!: ForgotPasswordFormErrorMessages;
  @Input() resendVerifyLinkFormErrorMessages!: ResendVerifyLinkFormErrorMessages;
  
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

  @Output() clearErrorMessages = new EventEmitter<any>();
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
    console.log(this.view);
    // this.clearErrorMessages.emit();
  }

  handleSignin(event: any): void {    
    if (event) {
      this.handleChangeView(PageView.placeholder);
      this.successPage = 'signin';
    }
    else {
      this.handleChangeView(PageView.signin);
    }
    this.onSignin.emit(event);
  }

  handleSignup(event: any): void {
    if (event) {
      this.handleChangeView(PageView.placeholder);
      this.successPage = 'signup';
    }
    else {
      this.handleChangeView(PageView.signup);
    }
  }

  handleForgotPassword(event: any): void {
    if (event) {
      this.handleChangeView(PageView.placeholder);
      this.successPage = 'forgotpassword';
    }
    else {
      this.handleChangeView(PageView.forgotpassword);
    }
  }

  handleResendVerifyEmail(event: any): void {
    if (event) {
      this.handleChangeView(PageView.placeholder);
      this.successPage = 'resendverifyemail';
    }
    else {
      this.handleChangeView(PageView.resendverifyemail);
    }
  }

  handlePlaceholder(event: any): void {
    this.handleChangeView(PageView.placeholder);
  }
}

