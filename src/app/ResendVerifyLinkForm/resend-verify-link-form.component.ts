import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DEFAULT_TRANSLATION_DICTIONARY, TranslationDictionary, TranslationName, getTranslation } from '../types/TranslationDictionaryType';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { ResendVerifyLinkFormErrorMessages, ResendVerifyLinkRequest } from '../types';
import { AuthenticationService } from '../services/AuthenticationService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resend-verify-link-form',
  templateUrl: './resend-verify-link-form.component.html',
  styleUrls: ['./resend-verify-link-form.component.scss'],
})
export class ResendVerifyLinkFormComponent {

  @Input() translationDictionary: TranslationDictionary = DEFAULT_TRANSLATION_DICTIONARY;

  @Input() translationName!: TranslationName;

  @Output() onResendVerifyLink: EventEmitter<ResendVerifyLinkRequest> = new EventEmitter<ResendVerifyLinkRequest>();
  @Output() onSignin: EventEmitter<void> = new EventEmitter<void>();

  resendVerifyLinkForm!: FormGroup;

  @Input() resendVerifyLinkFormErrorMessages!: ResendVerifyLinkFormErrorMessages;

  constructor(private fb: FormBuilder,
    public router: Router,
    public authenticationService: AuthenticationService) {
    this.resendVerifyLinkForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  get formControls() {
    return this.resendVerifyLinkForm.controls;
  }

  onInput(event: any) {
    const { name, value } = event.target;
    this.resendVerifyLinkForm.patchValue({ [name]: value });
  }

  state: ResendVerifyLinkRequest = {
    email: '',
  };

  ngOnInit(): void {
    this.initForm();
  }
  initForm(): void {
    this.resendVerifyLinkForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  onSubmit(event: Event): void {
    console.log('onSubmit')
    event.preventDefault();
    if (this.resendVerifyLinkForm.valid) {
      const resendVerifyLinkRequest = this.resendVerifyLinkForm.value;
      const environment = 'production';
      const realm = '228';

      this.authenticationService.resendVerifyLink(environment, realm, resendVerifyLinkRequest).subscribe({
        next: (response: any) => {
          console.log(response);
          console.log('Email Already Verified', response);
          this.onResendVerifyLink.emit(response);
        },
        error: (error: any) => {
          console.error(error);
        }
      });
    } else {
      this.resendVerifyLinkForm.markAllAsTouched();
    }
  }

  getTranslation(key: string): string {
    return this.translationDictionary[key] || '';
  }
  navigateToSignin() {
    this.onSignin.emit();
  }
}
