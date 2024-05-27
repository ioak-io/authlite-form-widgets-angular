import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TranslationDictionary, TranslationName, getTranslation, DEFAULT_TRANSLATION_DICTIONARY } from '../types/TranslationDictionaryType';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/AuthenticationService';
import SigninFormErrorMessages from '../types/SigninFormErrorMessagesType';
import SigninRequest from '../types/SigninRequest';

@Component({
  selector: 'app-signin-form',
  templateUrl: './signin-form.component.html',
  styleUrls: ['./signin-form.component.scss'],
})
export class SigninFormComponent implements OnInit {

  @Input() signinFormErrorMessages!: SigninFormErrorMessages;

  @Output() onSignin = new EventEmitter<SigninRequest>();

  @Output() onSignup = new EventEmitter<void>();

  @Output() onForgotPassword = new EventEmitter<void>();

  @Input() translationDictionary: TranslationDictionary = DEFAULT_TRANSLATION_DICTIONARY;

  @Input() translationName!: TranslationName;

  signinForm!: FormGroup;

  state: SigninRequest = {
    email: '',
    password: ''
  };

  /*onInput(event: Event, field: keyof SigninRequest): void {
    const target = event.target as HTMLInputElement;
    this.state[field] = target.value;
  }*/

  showPassword: boolean = true; //password eye icon functionality

  constructor(private fb: FormBuilder, 
    private router: Router, 
    private authenticationService:AuthenticationService) { }
    
  togglePassword() {
    this.showPassword = !this.showPassword
  }
  navigateToSignupForm() {
    this.router.navigate(['/signup-form']);
  }
  navigateToLogin(){
    this.router.navigate(['/login']);
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.signinForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }
  get signinGreetingTitle(): string {
    return this.translationDictionary.SIGNIN_FORM__GREETING_TITLE;
  }
  get signinGreetingSubtitle(): string {
    return this.translationDictionary.SIGNIN_FORM__GREETING_SUBTITLE;
  }
  get signinFormLabelUsername(): string {
    return this.translationDictionary.SIGNIN_FORM__LABEL_USERNAME;
  }
  get signinFormLabelPassword(): string {
    return this.translationDictionary.SIGNIN_FORM__LABEL_PASSWORD;
  }
  get signinFormUsernameErrorMessage(): string {
    return this.translationDictionary.SIGNIN_ERROR__BLANK_USERNAME;
  }
  get signinFormPasswordErrorMessage(): string {
    return this.translationDictionary.SIGNIN_ERROR__BLANK_PASSWORD;
  }
  get signinFormInvalidUsername(): string {
    return this.translationDictionary.SIGNIN_ERROR__INVALID_USERNAME;
  }
  get signinFormIncorrectPassword(): string {
    return this.translationDictionary.SIGNIN_ERROR__INCORRECT_PASSWORD;
  }
  get signinFormUserNotFound(): string {
    return this.translationDictionary.SIGNIN_ERROR__USER_NOT_FOUND;
  }
 onSubmit(): void {
    console.log('onSubmit')
    if (this.signinForm.invalid) {
      this.signinForm.markAllAsTouched();
      return;
    }
    
    const enteredEmail = this.signinForm.value.email;
    const enteredPassword = this.signinForm.value.password;

    const signinRequest = this.signinForm.value;

    const environment = 'production';
    const realm = '228';

    this.authenticationService.signin(environment, realm, signinRequest)
    .subscribe(
      (response: any) => {
        console.log('Login Successful', response);
        this.router.navigate(['/login']);
      },
      (error) => {
        console.error('Login Error', error);
      }
    );
  }
  /*if (!this.isUserExists(enteredEmail, enteredPassword)) {
      this.signinForm.setErrors({ userNotFound: true });
    }
    else {
      console.log('Login Successful', this.signinForm.value);
    }
  }
  isUserExists(email: string, password: string): boolean {
    return false;
  }*/
}