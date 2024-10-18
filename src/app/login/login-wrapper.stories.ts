import { moduleMetadata, Meta, Story } from '@storybook/angular';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { AuthenticationService } from '../services/AuthenticationService';
import { ReactiveFormsModule } from '@angular/forms';
import { DEFAULT_TRANSLATION_DICTIONARY } from '../types/TranslationDictionaryType';
import { LoginWrapperComponent } from './login-wrapper.component';
import { LoginComponent } from './login/login.component';
import { DesignOneComponent } from './DesignOne/design-one.component';
import { MainFormComponent } from './MainForm/main-form.component';
import { HeaderComponent } from '../Header/header.component';
import { LogoComponent } from '../Logo/logo.component';
import { SigninFormComponent } from '../signinForm/signin-form.component';
import { TaglineComponent } from '../Tagline/tagline.component';
import { CheckboxComponent } from '../ui/checkbox/checkbox.component';
import { ForgotPasswordFormComponent } from '../ForgotPasswordForm/forgot-password-form.component';
import { SignupFormComponent } from '../SignupForm/signup-form.component';
import { FormElementMessageComponent } from '../shared/FormElementMessage/form-element-message.component';
import { ResendVerifyLinkFormComponent } from '../ResendVerifyLinkForm/resend-verify-link-form.component';
import { SignupSuccessPageComponent } from '../SignupSuccessPage/signup-success-page.component';
import { InfoPageComponent } from '../InfoPage/info-page.component';
import { InfoPageDescriptionComponent } from '../InfoPage/InfoPageDescription/info-page-description.component';
import { InfoPageFootnoteComponent } from '../InfoPage/InfoPageFootnote/info-page.footnote.component';
import PageView from '../types/PageViewType';
import { TranslationName } from '../types/TranslationDictionaryType';
import { PlaceholderComponent } from '../Placeholder/placeholder.component';

export default {
  title: 'Form Elements/Login',
  component: LoginWrapperComponent,
  decorators: [
    moduleMetadata({
      declarations: [
        LoginWrapperComponent,
        LoginComponent,
        DesignOneComponent,
        MainFormComponent,
        HeaderComponent,
        LogoComponent,
        PlaceholderComponent,
        SigninFormComponent,
        TaglineComponent,
        CheckboxComponent,
        ForgotPasswordFormComponent,
        SignupFormComponent,
        FormElementMessageComponent,
        ResendVerifyLinkFormComponent,
        SignupSuccessPageComponent,
        InfoPageComponent,
        InfoPageDescriptionComponent,
        InfoPageFootnoteComponent
      ],
      imports: [RouterTestingModule, ReactiveFormsModule, HttpClientModule],
      providers: [AuthenticationService],
    }),
  ],
} as Meta;

const Template: Story<LoginWrapperComponent> = (args: LoginWrapperComponent,) => ({
  component: LoginWrapperComponent,
  props: args,
});

export const Demo = Template.bind({});
Demo.args = {
};