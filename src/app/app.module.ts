import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AuthenticationService } from './services/AuthenticationService';
import { AppComponent } from './app.component';
import { DesignOneComponent } from './login/DesignOne/design-one.component';
import { MainFormComponent } from './login/MainForm/main-form.component';
import { HeaderComponent } from './Header/header.component';
import { LogoComponent } from './Logo/logo.component';
import { FormElementMessageComponent } from './shared/FormElementMessage/form-element-message.component';
import { LoginWrapperComponent } from './login/login-wrapper.component';
import { LoginComponent } from './login/login/login.component';
import { SigninFormComponent } from './signinForm/signin-form.component';
import { CheckboxComponent } from './ui/checkbox/checkbox.component';
import { ForgotPasswordFormComponent } from './ForgotPasswordForm/forgot-password-form.component';
import { SignupFormComponent } from './SignupForm/signup-form.component';
import { ResendVerifyLinkFormComponent } from './ResendVerifyLinkForm/resend-verify-link-form.component';
import { SignupSuccessPageComponent } from './SignupSuccessPage/signup-success-page.component';

@NgModule({
  declarations: [
    DesignOneComponent,
    MainFormComponent,
    HeaderComponent,
    LogoComponent,
    FormElementMessageComponent,
    LoginWrapperComponent,
    LoginComponent,
    SigninFormComponent,
    CheckboxComponent,
    ForgotPasswordFormComponent,
    SignupFormComponent,
    ResendVerifyLinkFormComponent,
    SignupSuccessPageComponent, 
  ],
  imports: [
    AppComponent,
    BrowserModule, 
    ReactiveFormsModule, 
    AppRoutingModule, 
    HttpClientModule,
  ],
  providers: [AuthenticationService],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: []
})
export class AppModule { }
