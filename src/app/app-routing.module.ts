
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninFormComponent } from './signinForm/signin-form.component';
import { ForgotPasswordFormComponent } from './ForgotPasswordForm/forgot-password-form.component';
import { SignupFormComponent } from './SignupForm/signup-form.component';
import { APP_BASE_HREF } from '@angular/common';

const routes: Routes = [
  { path: 'signin-form', component: SigninFormComponent },
  { path: 'forgot-password-form', component: ForgotPasswordFormComponent },
  { path: 'signup-form', component: SignupFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}],
  exports: [RouterModule],
})
export class AppRoutingModule {}
