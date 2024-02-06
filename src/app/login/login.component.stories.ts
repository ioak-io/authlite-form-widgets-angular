import {moduleMetadata, Meta, Story } from '@storybook/angular';
import { LoginComponent } from './login.component';
import { SigninFormComponent } from '../signinForm/signin-form.component';
import { ReactiveFormsModule } from '@angular/forms';

export default{
  title: 'Form Elements/Login',
  component: LoginComponent,
  decorators: [
    moduleMetadata({
      imports: [ReactiveFormsModule],
      declarations: [LoginComponent, SigninFormComponent]
    }),
  ],
} as Meta;

const Template: Story<LoginComponent> = (args: LoginComponent) => ({
  props:args,
});

export const Demo = Template.bind ({});
Demo.args = {
    
}