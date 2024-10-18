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
  @Input() PageView: any;
  @Input() view: PageView = PageView.signin;
  @Input() successPage: 'signin' | 'signup' | 'forgotpassword' | 'resendverifyemail' = 'signin';
  @Input() signinFormErrorMessages: SigninFormErrorMessages = {};
  @Input() signupFormErrorMessages: SignupFormErrorMessages = {};
  @Input() forgotPasswordFormErrorMessages: ForgotPasswordFormErrorMessages = {};
  @Input() resendVerifyLinkFormErrorMessages: ResendVerifyLinkFormErrorMessages = {};
  @Input() changeView: any;

  logo: string = 'https://authlite-widgets.ioak.io/static/media/authlite_black.449e265c.svg';

  signinheading = 'Authentication successful!';
  signupheading = 'User account created!';
  forgotpasswordheading = 'Password reset link sent!';
  resendverifyemailheading = 'Email confirmation link sent!';

  signindescription = 'Posuere ipsum tellus ornare rutrumaliquam torquent fermentum euismod musvestibulum tincidunt cursus quisque elitsuspendisse augue. rutrumaliquam commodo <a href="#" (click)="handleSignin($event)">login now</a> parturient rutrumaliquam nec varius sociosqu.';
  signupdescription = 'Gravida dolor suscipit urna sagittis per <a href="#" (click)="handleSignin($event)">login now</a> parturient eu. laoreet congue fermentum ipsum tincidunt elementum auctor aptent aliquam feugiat interdum. porta sem metus convallis donec nam sodales.';
  forgotpassworddescription = 'Gravida dolor suscipit urna sagittis per <a href="#" (click)="handleSignin($event)">login now</a> parturient eu. laoreet congue fermentum ipsum tincidunt elementum auctor aptent aliquam feugiat interdum. porta sem metus convallis donec nam sodales.';
  resendverifyemaildescription = 'Please check your email for <a href="#"(click)="handleSignin($event)">login now</a> parturient eu. laoreet congue fermentum ipsum tincidunt elementum auctor aptent aliquam feugiat interdum. porta sem metus convallis donec nam sodales.';

  signinfootnote = 'Commodo nullam et facilisis hendrerit pharetra platea duis commodo nascetur libero aptent';
  signupfootnote = 'Rutrum elit lacus consequat justo luctus per proin venenatis varius quam dui dignissim etiam';
  forgotpasswordfootnote = 'Rutrum elit lacus consequat justo luctus per proin venenatis varius quam dui dignissim etiam';
  resendverifyemailfootnote = 'Rutrum elit lacus consequat justo luctus per proin venenatis varius quam dui dignissim etiam';

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
  }

  onSignin(data: any): void {
    this.authenticationService.signin('production', 228, data).subscribe((response: any) => {
      console.log(response);
      if (response.outcome === 'SUCCESS') {
        this.view = PageView.placeholder;
        this.successPage = 'signin';
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

  handleSignin(event: MouseEvent): void {
    event.preventDefault();
    this.view = PageView.signin;
  }

  handleSignup(event: any): void {
    this.view = PageView.signup;
  }

  handleForgotPassword(event: MouseEvent): void {
    event.preventDefault();
    this.view = PageView.forgotpassword;
  }

  handleResendVerifyLink(event: any): void {
    this.view = PageView.resendverifyemail;
  }

  handlePlaceholder(event: any): void {
    this.view = PageView.placeholder;
  }
}