import { Component, Input, OnInit, OnChanges, SimpleChanges, EventEmitter, Output } from '@angular/core';
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
  @Input() successPage!: string;
  @Input() logo!: string;
  @Input() placeholder: any;
  @Input() signinFormErrorMessages!: SigninFormErrorMessages;
  @Input() signupFormErrorMessages!: SignupFormErrorMessages;
  @Input() forgotPasswordFormErrorMessages!: ForgotPasswordFormErrorMessages;
  @Input() resendVerifyLinkFormErrorMessages!: ResendVerifyLinkFormErrorMessages;
  @Input() translationDictionary!: TranslationDictionary;
  @Input() view!: PageView;
  @Input() changeView: any;
  @Output() onSignin = new EventEmitter<any>();
  @Output() onSignup = new EventEmitter<any>();
  @Output() onForgotPassword = new EventEmitter<any>();
  @Output() onResendVerifyLink = new EventEmitter<any>();
  @Output() onPlaceholder = new EventEmitter<any>();
  @Output() clearErrorMessages = new EventEmitter<void>();

  ngOnInit() {}

  ngOnChanges(): void {
    if (this.signinFormErrorMessages.unverifiedEmail) {
      this.changeView(PageView.resendverifyemail);
    }
  }

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
  
  handlePlaceholder(event: any) {
    this.onPlaceholder.emit(event);
  }

  handleClearErrorMessages() {
    this.clearErrorMessages.emit();
  }

  handleChangeView(event: any) {
    this.changeView.emit(event);
  }
}