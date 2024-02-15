import { moduleMetadata, Meta, Story } from '@storybook/angular';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginWrapperComponent } from './login-wrapper.component';
import { DesignOneComponent } from './DesignOne/design-one.component';
import { MainFormComponent } from './MainForm/main-form.component';
import { HeaderComponent } from '../Header/header.component';
import { LogoComponent } from '../Logo/logo.component';
import { SigninFormComponent } from '../signinForm/signin-form.component';
import { TaglineComponent } from '../Tagline/tagline.component';
import { CheckboxComponent } from '../ui/checkbox/checkbox.component';
import { ForgotPasswordFormComponent } from '../ForgotPasswordForm/forgot-password-form.component';
import { SignupFormComponent } from '../SignupForm/signup-form.component';
import { DEFAULT_TRANSLATION_DICTIONARY } from '../types/TranslationDictionaryType';
import { FormElementMessageComponent } from '../shared/FormElementMessage/form-element-message.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ResendVerifyLinkFormComponent } from '../ResendVerifyLinkForm/resend-verify-link-form.component';
import { SignupSuccessPageComponent } from '../SignupSuccessPage/signup-success-page.component';

export default {
  title: 'Form Elements/Login',
  component: LoginWrapperComponent,
  decorators: [
    moduleMetadata({
      declarations: [
        LoginWrapperComponent, 
        DesignOneComponent, 
        MainFormComponent, 
        HeaderComponent,
        LogoComponent,
        SigninFormComponent,
        TaglineComponent,
        CheckboxComponent,
        ForgotPasswordFormComponent,
        SignupFormComponent,
        FormElementMessageComponent,
        ResendVerifyLinkFormComponent,
        SignupSuccessPageComponent
      ],
      imports: [RouterTestingModule, ReactiveFormsModule
      ],
    }),
  ],
} as Meta;

const Template: Story<LoginWrapperComponent> = (args:LoginWrapperComponent) => ({
  component: LoginWrapperComponent,
  props: args,
});

export const Demo = Template.bind({});
Demo.args = {
  translationDictionary: DEFAULT_TRANSLATION_DICTIONARY,
  signinGreetingTitle: DEFAULT_TRANSLATION_DICTIONARY.SIGNIN_FORM__GREETING_TITLE,
  signinGreetingSubtitle: DEFAULT_TRANSLATION_DICTIONARY.SIGNIN_FORM__GREETING_SUBTITLE,
  signupGreetingTitle: DEFAULT_TRANSLATION_DICTIONARY.SIGNUP_FORM__GREETING_TITLE,
  signupGreetingSubtitle: DEFAULT_TRANSLATION_DICTIONARY.SIGNUP_FORM__GREETING_SUBTITLE,
  forgotPasswordGreetingTitle: DEFAULT_TRANSLATION_DICTIONARY.FORGOT_PASSWORD_FORM__GREETING_TITLE,
  forgotPasswordGreetingSubtitle: DEFAULT_TRANSLATION_DICTIONARY.FORGOT_PASSWORD_FORM__GREETING_SUBTITLE,
  signinFormLabelUsername: DEFAULT_TRANSLATION_DICTIONARY.SIGNIN_FORM__LABEL_USERNAME,
  signinFormLabelPassword: DEFAULT_TRANSLATION_DICTIONARY.SIGNIN_FORM__LABEL_PASSWORD,
  signupFormLabelGivenname: DEFAULT_TRANSLATION_DICTIONARY.SIGNUP_FORM__LABEL_GIVENNAME,
  signupFormLabelFamilyname: DEFAULT_TRANSLATION_DICTIONARY.SIGNUP_FORM__LABEL_FAMILYNAME,
  signupFormLabelEmail: DEFAULT_TRANSLATION_DICTIONARY.SIGNUP_FORM__LABEL_EMAIL,
  signupFormLabelPassword: DEFAULT_TRANSLATION_DICTIONARY.SIGNUP_FORM__LABEL_PASSWORD,
  signupFormLabelRetypePassword: DEFAULT_TRANSLATION_DICTIONARY.SIGNUP_FORM__LABEL_RETYPEPASSWORD,
  forgotPasswordFormLabelEmail: DEFAULT_TRANSLATION_DICTIONARY.FORGOT_PASSWORD_FORM__LABEL_EMAIL,
  resendVerifyLinkFormGreetingTitle:DEFAULT_TRANSLATION_DICTIONARY.RESEND_VERIFY_LINK_FORM__GREETING_TITLE,
  resendVerifyLinkFormGreetingSubtitle:DEFAULT_TRANSLATION_DICTIONARY.RESEND_VERIFY_LINK_FORM__GREETING_SUBTITLE,
  resendVerifyLinkFormLabelEmail:DEFAULT_TRANSLATION_DICTIONARY.RESEND_VERIFY_LINK_FORM__LABEL_EMAIL,
  heading: 'Signup Successful',
  children: 'Your account has been successfully created.',
}