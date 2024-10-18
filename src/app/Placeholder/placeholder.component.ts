import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import PageView from '../types/PageViewType';
import { DEFAULT_TRANSLATION_DICTIONARY, TranslationDictionary } from '../types/TranslationDictionaryType';

@Component({
  selector: 'app-placeholder',
  templateUrl: './placeholder.component.html',
  styleUrls: ['./placeholder.component.scss'],
})
export class PlaceholderComponent implements OnChanges {
  @Input() successPage: 'signin' | 'signup' | 'forgotpassword' | 'resendverifyemail' = 'signin';
  @Input() view!: PageView;
  @Input() translationDictionary: TranslationDictionary = DEFAULT_TRANSLATION_DICTIONARY;
  @Input() PageView: any;
  @Input() changeView: any;

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

  @Output() onSignin = new EventEmitter<any>();
  @Output() onSignup = new EventEmitter<any>();
  @Output() onForgotPassword = new EventEmitter<any>();
  @Output() onResendVerifyLink = new EventEmitter<any>();
  @Output() onPlaceholder = new EventEmitter<any>();
  @Output() clearErrorMessages = new EventEmitter<void>();

  ngOnChanges() {
    console.log(this.successPage);
  }

  handleSignin(event: MouseEvent): void {
    event.preventDefault();
    this.onSignin.emit(event);
  }

  handleSignup(event: any): void {
    this.onSignup.emit(event);
  }

  handleForgotPassword(event: MouseEvent): void {
    event.preventDefault();
    this.onForgotPassword.emit(event);
  }

  handleResendVerifyLink(event: any): void {
    this.onResendVerifyLink.emit(event);
  }

  handlePlaceholder(event: any): void {
    this.onPlaceholder.emit(event);
  }
}