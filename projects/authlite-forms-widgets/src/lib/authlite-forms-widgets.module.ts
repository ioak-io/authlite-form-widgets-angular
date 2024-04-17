import { CommonModule } from '@angular/common';
import { NgModule} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
//import { AppRoutingModule } from '../../../../src/app/app-routing.module';
import { AuthliteFormsWidgetsComponent } from './authlite-forms-widgets.component';
import { SigninFormComponent } from './signinForm/signin-form.component';
import { SignupFormComponent } from './SignupForm/signup-form.component';
import { ForgotPasswordFormComponent } from './ForgotPasswordForm/forgot-password-form.component';
import { ResendVerifyLinkFormComponent } from './ResendVerifyLinkForm/resend-verify-link-form.component';
import { SignupSuccessPageComponent } from './SignupSuccessPage/signup-success-page.component';
import { CheckboxComponent } from './ui/checkbox/checkbox.component';
import { TaglineComponent } from './Tagline/tagline.component';
import { FormElementMessageComponent } from './shared/FormElementMessage/form-element-message.component';
import { MainFormComponent } from './login/MainForm/main-form.component';
import { DesignOneComponent } from './login/DesignOne/design-one.component';
import { LoginWrapperComponent } from './login/login-wrapper.component';
import { LogoComponent } from './Logo/logo.component';
import { HeaderComponent } from './Header/header.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AuthliteFormsWidgetsComponent,
    SigninFormComponent,
    SignupFormComponent,
    ForgotPasswordFormComponent,
    ResendVerifyLinkFormComponent,
    SignupSuccessPageComponent,
    CheckboxComponent,
    TaglineComponent,
    FormElementMessageComponent,
    LogoComponent,
    MainFormComponent,
    DesignOneComponent,
    LoginWrapperComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule,
    //AppRoutingModule
    
  ],
  exports:[
    AuthliteFormsWidgetsComponent,
    SigninFormComponent,
    SignupFormComponent,
    ForgotPasswordFormComponent,
    ResendVerifyLinkFormComponent,
    SignupSuccessPageComponent,
    CheckboxComponent,
    TaglineComponent,
    FormElementMessageComponent,
    LogoComponent,
    MainFormComponent,
    DesignOneComponent,
    LoginWrapperComponent,
    HeaderComponent
  ]
})
export class AuthliteFormsWidgetsModule { }
