import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DEFAULT_TRANSLATION_DICTIONARY, TranslationDictionary, TranslationName, getTranslation } from '../types/TranslationDictionaryType';
import { FormBuilder, FormGroup, Validators, AbstractControl, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from "../services/AuthenticationService";
import SignupRequest from '../types/SignupRequest';
import SignupFormErrorMessages from '../types/SignupFormErrorMessagesType';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss'],
})
export class SignupFormComponent {

  @Output() onSignup: EventEmitter<SignupRequest> = new EventEmitter<SignupRequest>();
  @Output() onSignin: EventEmitter<void> = new EventEmitter<void>();
  @Output() onForgotPassword: EventEmitter<void> = new EventEmitter<void>();

  @Input() translationDictionary: TranslationDictionary = DEFAULT_TRANSLATION_DICTIONARY;

  @Input() translationName!: TranslationName;

  @Input() signupFormErrorMessages!: SignupFormErrorMessages;

  signupForm!: FormGroup;

  showPassword: boolean = true;

  togglePassword() {
    this.showPassword = !this.showPassword
  }

  constructor(private fb: FormBuilder,
    private router: Router,
    private authenticationService: AuthenticationService) 
    {
      this.signupForm = this.fb.group({
        given_name: ['', Validators.required],
        family_name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required],
        retype_password: ['', Validators.required],
      },
      {
        validators: this.passwordMatchValidator,
      });
    }

  passwordMatchValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const password = control.get('password');
    const retypePassword = control.get('retype_password');

    if (password && retypePassword && password.value !== retypePassword.value) {
      return { 'passwordMismatch': true };
    }
    return null;
  }

  get formControls() {
    return this.signupForm.controls;
  }

  onInput(event: any) {
    const { name, value } = event.target;
    this.signupForm.patchValue({ [name]: value });
  }

  state: SignupRequest = {
    given_name: '',
    family_name: '',
    email: '',
    password: '',
    retype_password: ''
  };
  
  onSubmit(event: Event): void {
    console.log('onSubmit')
    event.preventDefault();
    if (this.signupForm.valid)
    {
      const signinRequest = this.signupForm.value;
      const environment = 'production';
      const realm = '228';

      this.authenticationService.signup(environment, realm, signinRequest).subscribe(
        (response: any) => {
          console.log('Signup Successful:', response);
          this.router.navigate(['/signup-success-page']);
        },
        (error: any) => {
          console.error('Signup Error:', error);
        }
      );
    }
    else {
      this.signupForm.markAllAsTouched();
    }
  }
  getTranslation(key: string): string {
    return this.translationDictionary[key] || '';
  }

  navigateToSignin() {
    this.onSignin.emit();
    this.router.navigate(['/signin-form']);
  }
}

