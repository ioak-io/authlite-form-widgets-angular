import { Routes } from '@angular/router';
import { SigninFormComponent } from './signinForm/signin-form.component';
import { SignupFormComponent } from './SignupForm/signup-form.component';
import { ForgotPasswordFormComponent } from './ForgotPasswordForm/forgot-password-form.component';
import { LoginComponent } from './login/login/login.component';
import { SignupSuccessPageComponent } from './SignupSuccessPage/signup-success-page.component';
import { ResendVerifyLinkFormComponent } from './ResendVerifyLinkForm/resend-verify-link-form.component';

export const routes: Routes = [
  { path: 'signin-form', component: SigninFormComponent },
  { path: 'signup-form', component: SignupFormComponent },
  { path: 'forgot-password-form', component: ForgotPasswordFormComponent },
  { path: 'resend-verify-link-form', component: ResendVerifyLinkFormComponent},
  { path: 'login', component: LoginComponent },
  { path: 'signup-success-page', component: SignupSuccessPageComponent },
  { path: '', redirectTo: '/signin-form', pathMatch: 'full'},
];
