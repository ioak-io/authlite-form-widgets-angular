<<<<<<< HEAD
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
=======
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninFormComponent } from './signinForm/signin-form.component';
import { ForgotPasswordFormComponent } from './ForgotPasswordForm/forgot-password-form.component';
import { SignupFormComponent } from './SignupForm/signup-form.component';
import { SignupSuccessPageComponent } from './SignupSuccessPage/signup-success-page.component';
import { LoginComponent } from './login/login/login.component';
import { APP_BASE_HREF } from '@angular/common';

export const routes: Routes = [
  { path: '', redirectTo: 'signin-form', pathMatch: 'full' },
  { path: 'signin-form', component: SigninFormComponent },
  { path: 'signup-form', component: SignupFormComponent },
  { path: 'forgot-password-form', component: ForgotPasswordFormComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup-success-page', component: SignupSuccessPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class AppRoutingModule { }
>>>>>>> 5a4393a4c4d83b9c4c7d49a676b9e17a372a2db6
