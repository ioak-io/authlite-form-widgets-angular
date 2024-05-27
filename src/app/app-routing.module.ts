
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninFormComponent } from './signinForm/signin-form.component';
import { ForgotPasswordFormComponent } from './ForgotPasswordForm/forgot-password-form.component';
import { SignupFormComponent } from './SignupForm/signup-form.component';
import { SignupSuccessPageComponent } from './SignupSuccessPage/signup-success-page.component';
import { LoginComponent } from './login/login/login.component';
//import { APP_BASE_HREF } from '@angular/common';

const routes: Routes = [
  { path: '', redirectTo: 'signin-form', pathMatch: 'full'},
  { path: 'signin-form', component: SigninFormComponent },
  { path: 'signup-form', component: SignupFormComponent },
  { path: 'forgot-password-form', component: ForgotPasswordFormComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup-success-page', component: SignupSuccessPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  //providers: [{provide: APP_BASE_HREF, useValue: '/'}],
  exports: [RouterModule],
  providers:[],
})

export class AppRoutingModule {}
