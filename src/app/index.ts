import { NgModule } from '@angular/core';
import { AuthenticationService } from '../app/services/AuthenticationService';
import * as AuthliteTypes from '../app/types';
//import { LoginWrapperComponent } from '../app/login/login-wrapper.component';
//import { SignupFormComponent } from '../app/SignupForm/signup-form.component';

@NgModule({
  declarations: [
    //LoginWrapperComponent,
    //SignupFormComponent
  ],
  providers: [
    AuthenticationService
  ],
  exports: [
    //LoginWrapperComponent,
    //SignupFormComponent
  ]
})
export class AuthModule { }
