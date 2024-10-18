import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TranslationDictionary, TranslationName, getTranslation, DEFAULT_TRANSLATION_DICTIONARY } from '../types/TranslationDictionaryType';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../services/AuthenticationService';
import SigninFormErrorMessages from '../types/SigninFormErrorMessagesType';
import SigninRequest from '../types/SigninRequest';

@Component({
  selector: 'app-signin-form',
  templateUrl: './signin-form.component.html',
  styleUrls: ['./signin-form.component.scss'],
})

export class SigninFormComponent {

  @Output() onSignin: EventEmitter<SigninRequest> = new EventEmitter<SigninRequest>();
  @Output() onSignup = new EventEmitter<any>();
  @Output() onForgotPassword = new EventEmitter<any>();
  @Output() onPlaceholder = new EventEmitter<any>();

  @Input() signinFormErrorMessages!: SigninFormErrorMessages;
  @Input() TranslationName!: TranslationName;
  @Input() translationDictionary: TranslationDictionary = DEFAULT_TRANSLATION_DICTIONARY;
  @Input() changeView: any;

  signinForm!: FormGroup;

  showPassword: boolean = true; //password eye icon functionality

  constructor(private fb: FormBuilder,
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
    if (this.signinForm.valid) {
      const signinRequest = this.signinForm.value;
      const environment = 'production';
      const realm = '228';

      this.authenticationService.signin(environment, realm, signinRequest).subscribe(
        (response: any) => {
          console.log('Login Successfull', response);
          this.onSignin.emit(response);
        },

        (error: any) => {
          console.log('Login Error:', error);
          if (error.errorCode === 'userNotFound') {
            this.signinForm.controls['email'].setErrors({ userNotFound: true });
          }
          else if (error.errorCode === 'incorrectPassword') {
            this.signinForm.controls['password'].setErrors({ incorrectPassword: true });
          }
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
    this.onSignup.emit();
  }

  navigateToForgotPassword() {
    this.onForgotPassword.emit();
  }
}