import { Component, Input} from '@angular/core';
import { TranslationDictionary, TranslationName, getTranslation } from '../types/TranslationDictionaryType';
import { AuthenticationService } from '../services/AuthenticationService';
import PageView from '../types/PageViewType';

@Component({
  selector: 'app-login-wrapper',
  templateUrl: './login-wrapper.component.html',
  styleUrls: ['./style.css'],
})

export class LoginWrapperComponent{
  @Input() translationDictionary!: TranslationDictionary;
  @Input() signinGreetingTitle!: string;
  @Input() signinGreetingSubtitle!: string;
  @Input() signinFormLabelUsername!: string;
  @Input() signinFormLabelPassword!: string;
  @Input() signupGreetingTitle!: string;
  @Input() signupGreetingSubtitle!: string;
  @Input() signupFormLabelGivenname!: string;
  @Input() signupFormLabelFamilyname!: string;
  @Input() signupFormLabelEmail!: string;
  @Input() signupFormLabelPassword!: string;
  @Input() signupFormLabelRetypePassword!: string;
  @Input() forgotPasswordGreetingTitle!: string;
  @Input() forgotPasswordGreetingSubtitle!: string;
  @Input() forgotPasswordFormLabelEmail!: string;
  @Input() resendVerifyLinkFormGreetingTitle!:string;
  @Input() resendVerifyLinkFormGreetingSubtitle!: string;
  @Input() resendVerifyLinkFormLabelEmail!:string;
  @Input() heading: string = '';
  @Input() children: any;

  successPage: 'signin' | 'signup' | 'forgotpassword' | 'resendverifyemail' | null = null;
  view: PageView = PageView.signin;

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
  }

  onSignin(data: any): void {
    this.authenticationService.signin('production', 228, data).subscribe((response: any) => {
      if (response.outcome === 'SUCCESS') {
        this.view = PageView.placeholder;
        this.successPage = 'signin';
      }
      //this.signinFormErrorMessages = response.errorMessages;
    });
  }
  onSignup(data: any): void {
    this.authenticationService.signup('production', 228, data).subscribe((response: any) => {
      console.log(response);
      if (response.outcome === 'SUCCESS') {
        this.view = PageView.placeholder;
        this.successPage = 'signup';
      }
      //this.signupFormErrorMessages = response.errorMessages;
    });
  }
  onForgotPasswordForm(data: any): void {
    this.authenticationService.ForgotPasswordForm('production', 228, data).subscribe((response: any) => {
      console.log(response);
      if (response.outcome === 'SUCCESS') {
        this.view = PageView.placeholder;
        this.successPage = 'forgotpassword';
      }
      //this.forgotPasswordFormErrorMessages = response.errorMessages;
    });
  }
  onResendVerifyLinkForm(data: any): void {
    this.authenticationService.resendVerifyLink('production', 228, data).subscribe((response: any) => {
      console.log(response);
      if (response.outcome === 'SUCCESS') {
        this.view = PageView.placeholder;
        this.successPage = 'resendverifyemail';
      }
      //this.resendVerifyLinkFormErrorMessages = response.errorMessages;
    });
  }
  clearErrorMessages(): void {
    //this.signinFormErrorMessages = {};
    //this.signupFormErrorMessages = {};
  }
}
