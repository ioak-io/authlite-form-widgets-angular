import { Component } from '@angular/core';
import { AuthenticationService } from '../../services/AuthenticationService';
//import { LoginProps } from '.';
import { SigninRequest, SigninResponse } from '../../types';
import { SignupRequest, SignupResponse } from '../../types';
import { ForgotPasswordResponse } from '../../types';
import { ResendVerifyLinkRequest, ResendVerifyLinkResponse } from '../../types';
import PageView from '../../types/PageViewType';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  view: PageView = PageView.signin;
  successPage: 'signin' | 'signup' | 'forgotpassword' | 'resendverifyemail' | null = null;
  signinFormErrorMessages: any = {};
  signupFormErrorMessages: any = {};
  forgotPasswordFormErrorMessages: any = {};
  resendVerifyLinkFormErrorMessages: any = {};
  PageView: any;

  constructor(private authenticationService: AuthenticationService) {}

  onSignin(data: any): void {
    this.authenticationService.signin('production', 228, data).subscribe((response: any) => {
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

  onForgotPasswordForm(data: any): void {
    this.authenticationService.ForgotPasswordForm('production', 228, data).subscribe((response: any) => {
      console.log(response);
      if (response.outcome === 'SUCCESS') {
        this.view = PageView.placeholder;
        this.successPage = 'forgotpassword';
      }
      this.forgotPasswordFormErrorMessages = response.errorMessages;
    });
  }

  onResendVerifyLinkForm(data: any): void {
    this.authenticationService.resendVerifyLink('production', 228, data).subscribe((response: any) => {
      console.log(response);
      if (response.outcome === 'SUCCESS') {
        this.view = PageView.placeholder;
        this.successPage = 'resendverifyemail';
      }
      this.resendVerifyLinkFormErrorMessages = response.errorMessages;
    });
  }

  clearErrorMessages(): void {
    this.signinFormErrorMessages = {};
    this.signupFormErrorMessages = {};
  }
}