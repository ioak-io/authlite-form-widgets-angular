import { moduleMetadata, Meta, Story } from '@storybook/angular';
import { LoginWrapperComponent } from './login-wrapper.component';
import { DesignOneComponent } from './DesignOne/design-one.component';
import { MainFormComponent } from './MainForm/main-form.component';
import { HeaderComponent } from '../Header/header.component';
import { LogoComponent } from '../Logo/logo.component';
import { SigninFormComponent } from '../SigninForm/signin-form.component';
import { TaglineComponent } from '../Tagline/tagline.component';
import { CheckboxComponent } from '../ui/checkbox/checkbox.component';
import { ForgotPasswordFormComponent } from '../ForgotPasswordForm/forgot-password-form.component';
import { SignupFormComponent } from '../SignupForm/signup-form.component';

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
        SignupFormComponent
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
  
};