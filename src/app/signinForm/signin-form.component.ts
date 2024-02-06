
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-signinForm',
  templateUrl: './signin-form.component.html',
  styleUrls: ['../login/login.component.scss'],
})
export class SigninFormComponent {
    @Input() signinFormErrorMessages: any;
    @Input() dictionary: any;
    @Input() onSignin: any;
    @Input() onSignup: any;
    @Input() onForgotPassword: any;

    state = {
        email: '',
        password: ''
      };
    
      onSubmit(event: any) {
        event.preventDefault();
        this.onSignin(this.state);
      }
    }