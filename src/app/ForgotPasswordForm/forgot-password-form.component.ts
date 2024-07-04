import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TranslationDictionary, DEFAULT_TRANSLATION_DICTIONARY, TranslationName } from '../types/TranslationDictionaryType';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/AuthenticationService';
import ForgotPasswordFormErrorMessages from '../types/ForgotPasswordFormErrorMessagesType';
import ForgotPasswordRequest from '../types/ResendVerifyLinkRequestType';

@Component({
  selector: 'app-forgot-password-form',
  templateUrl: './forgot-password-form.component.html',
  styleUrls: ['./forgot-password-form.component.scss'],
})
export class ForgotPasswordFormComponent{

  @Input() translationDictionary: TranslationDictionary = DEFAULT_TRANSLATION_DICTIONARY;

  @Input() translationName!: TranslationName;

  @Output() onForgotPassword: EventEmitter<{ email: string }> = new EventEmitter<{ email: string }>();
  @Output() onSignin: EventEmitter<void> = new EventEmitter<void>();

  forgotPasswordFormErrorMessages!: ForgotPasswordFormErrorMessages;

  forgotPasswordForm!: FormGroup;

  passwordResetLinkSent: boolean = false;

  email: any;

  state: ForgotPasswordRequest = {
    email: '',
  };

  constructor(private fb: FormBuilder,
    public router:Router,
    public authenticationService: AuthenticationService) 
    {
    this.forgotPasswordForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
   }

  get formControls() {
    return this.forgotPasswordForm.controls;
  }

  onInput(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const controlName = inputElement.name;
    this.forgotPasswordForm.controls[controlName].setValue(inputElement.value);
  }

    onSubmit(event: Event): void {
      console.log('onSubmit')
      event.preventDefault();
      if (this.forgotPasswordForm.valid) 
        {
        const forgotPasswordFormRequest = this.forgotPasswordForm.value;
        const environment = 'production';
        const realm = '228';
        const email = forgotPasswordFormRequest.email;
  
        this.authenticationService.ForgotPasswordForm(environment, realm, forgotPasswordFormRequest).subscribe({
          next: (response: any) => {
            console.log(response);
            this.router.navigate(['/signin-form']);
          },  
          error: (error: any) => {
            console.error(error);
          }
        });
      } else {
        this.forgotPasswordForm.markAllAsTouched();
      }
    }

    getTranslation(key: string): string {
      return this.translationDictionary[key] || '';
    }

    navigateToSignin() {
      this.router.navigate(['/signin-form']);
    }

  /*onSubmit(): void {
    console.log('onSubmit')
    if (this.forgotPasswordForm.invalid) {
      this.forgotPasswordForm.markAllAsTouched();
      return;
    }
    const enteredEmail = this.forgotPasswordForm.value.email;

    if (!this.isUserExists(enteredEmail)) {
      this.forgotPasswordForm.setErrors({ userNotFound: true });
    }
    else {
      console.log('reset link sent to:', this.forgotPasswordForm.value);
      this.sendPasswordResetLink(enteredEmail);
    }
  }
  isUserExists(email: string): boolean {
    return false;
  }
  sendPasswordResetLink(email: string): void {
    console.log('Password reset link sent to ${enteredEmail}', email);
    this.passwordResetLinkSent = true;
  }*/
}