import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DesignOneComponent } from './login/DesignOne/design-one.component';
import { MainFormComponent } from './login/MainForm/main-form.component';
import { HeaderComponent } from './Header/header.component';
import { LogoComponent } from './Logo/logo.component';
import { FormElementMessageComponent } from './shared/FormElementMessage/form-element-message.component';
import { LoginWrapperComponent } from './login/login-wrapper.component';
import { SigninFormComponent } from './signinForm/signin-form.component';
import { CheckboxComponent } from './ui/checkbox/checkbox.component';
import { ForgotPasswordFormComponent } from './ForgotPasswordForm/forgot-password-form.component';
import { SignupFormComponent } from './SignupForm/signup-form.component';
import { AppRoutingModule } from './app-routing.module';
import { ResendVerifyLinkFormComponent } from './ResendVerifyLinkForm/resend-verify-link-form.component';
import { SignupSuccessPageComponent } from './SignupSuccessPage/signup-success-page.component';


@NgModule({
  declarations: [
    AppComponent,
    DesignOneComponent,
    MainFormComponent,
    HeaderComponent,
    LogoComponent,
    FormElementMessageComponent,
    LoginWrapperComponent,
    SigninFormComponent,
    CheckboxComponent,
    ForgotPasswordFormComponent,
    SignupFormComponent,
    ResendVerifyLinkFormComponent,
    SignupSuccessPageComponent
  ],
  imports: [
    BrowserModule, ReactiveFormsModule, AppRoutingModule, 
  ],
  providers: [],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
