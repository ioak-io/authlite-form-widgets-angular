import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TranslationDictionary, TranslationName, getTranslation, DEFAULT_TRANSLATION_DICTIONARY } from '../types/TranslationDictionaryType';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/AuthenticationService';
import SigninFormErrorMessages from '../types/SigninFormErrorMessagesType';
import SigninRequest from '../types/SigninRequest';
import PageView from '../types/PageViewType';

@Component({
  selector: 'app-signin-form',
  templateUrl: './signin-form.component.html',
  styleUrls: ['./signin-form.component.scss'],
})

export class SigninFormComponent {

  @Output() onSignin: EventEmitter<SigninRequest> = new EventEmitter<SigninRequest>();
  @Output() onSignup: EventEmitter<void> = new EventEmitter<void>();
  @Output() onForgotPassword: EventEmitter<void> = new EventEmitter<void>();

  @Input() signinFormErrorMessages!: SigninFormErrorMessages;

  @Input() translationDictionary: TranslationDictionary = DEFAULT_TRANSLATION_DICTIONARY;

  signinForm!: FormGroup;

  showPassword: boolean = true; //password eye icon functionality

  TranslationName!: TranslationName;

  constructor(private fb: FormBuilder,
    private router: Router,
    private authenticationService: AuthenticationService) {
    this.signinForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  get formControls() {
    return this.signinForm.controls;
  }

  onInput(event: any) {
    const { name, value } = event.target;
    this.signinForm.patchValue({ [name]: value });
  }

  togglePassword() {
    this.showPassword = !this.showPassword
  }

  state: SigninRequest = {
    email: '',
    password: ''
  };


  initForm(): void {
    this.signinForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  onSubmit(event: Event): void {
    console.log('onSubmit')
    event.preventDefault();
    if (this.signinForm.valid) 
      {
      const signinRequest = this.signinForm.value;
      const environment = 'production';
      const realm = '228';

      this.authenticationService.signin(environment, realm, signinRequest).subscribe(
        (response: any) => {
          console.log('Login Successfull', response);
            this.router.navigate(['/signup-form']);
        },

        (error: any) => {
          console.error('Login Error:', error);
        }
      );

    } else {
      this.signinForm.markAllAsTouched();
    }
  }

  getTranslation(key: string): string {
    return this.translationDictionary[key] || '';
  }


  navigateToSignup() {
    this.router.navigate(['/signup-form']);
  }

  navigateToForgotPassword() {
    this.router.navigate(['/forgot-password-form']);
  }
}