import { Component, Input, OnInit} from '@angular/core';
import { DEFAULT_TRANSLATION_DICTIONARY, TranslationDictionary, TranslationName, getTranslation } from '../types/TranslationDictionaryType';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss'],
})
export class SignupFormComponent implements OnInit{
  
  @Input() translationDictionary: TranslationDictionary = DEFAULT_TRANSLATION_DICTIONARY;

  @Input() translationName!: TranslationName;

  signupForm!: FormGroup;

  show: boolean = true;
  changeType: boolean = true;

  constructor(private fb:FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }
  initForm(): void {
    this.signupForm = this.fb.group({
      given_name:['',Validators.required],
      family_name:['',Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      retype_password: ['', Validators.required],
    }, 
    {
      validators: this.passwordMatchValidator,
    });
    
  }

  get signupGreetingTitle(): string {
    return this.translationDictionary.SIGNUP_FORM__GREETING_TITLE;
  }
  get signupGreetingSubtitle(): string {
    return this.translationDictionary.SIGNUP_FORM__GREETING_SUBTITLE;
  }
  get signupFormLabelGivenname(): string {
    return this.translationDictionary.SIGNUP_FORM__LABEL_GIVENNAME;
  }
  get signupFormLabelFamilyname(): string {
    return this.translationDictionary.SIGNUP_FORM__LABEL_FAMILYNAME;
  }
  get signupFormLabelUsername() : string{
    return this.translationDictionary.SIGNUP_FORM__LABEL_EMAIL;
  }
  get signupFormLabelPassword() : string{
    return this.translationDictionary.SIGNUP_FORM__LABEL_PASSWORD;
  }
  get signupFormLabelRetypePassword() : string{
    return this.translationDictionary.SIGNUP_FORM__LABEL_RETYPEPASSWORD;
  }
  get signupFormGivennameErrorMessage(): string{
    return this.translationDictionary.SIGNUP_ERROR__BLANK_GIVENNAME;
  }
  get signupFormFamilynameErrorMessage(): string{
    return this.translationDictionary.SIGNUP_ERROR__BLANK_FAMILYNAME;
  }
  get signupFormUsernameErrorMessage(): string{
    const email = this.signupForm.get('email');
    return email?.hasError('required') ? this.translationDictionary.SIGNUP_ERROR__BLANK_USERNAME : email?.hasError('email') ? this.translationDictionary.SIGNUP_ERROR__INVALID_USERNAME : '';
  }
  get signupFormInvalidUsername(): string{
    return this.translationDictionary.SIGNUP_ERROR__INVALID_USERNAME;
  }
  get signupFormPasswordErrorMessage(): string{
    return this.translationDictionary.SIGNUP_ERROR__BLANK_PASSWORD;
  }
  get signupFormReTypePasswordErrorMessage(): string{
    return this.translationDictionary.SIGNUP_ERROR__BLANK_RETYPEPASSWORD;
  }
  get signupFormReTypePasswordDoesnotMatch(): string {
    const retypePassword = this.signupForm.get('retype_password');
    return retypePassword?.hasError('required') ? this.translationDictionary.SIGNUP_ERROR__BLANK_RETYPEPASSWORD : this.translationDictionary.SIGNUP_ERROR__PASSWORDS_DO_NOT_MATCH;
  }
  passwordMatchValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const password = control.get('password');
    const retypePassword = control.get('retype_password');

    if (password && retypePassword && password.value !== retypePassword.value) {
      return { 'passwordMismatch': true };
    }

    return null;
  }
  onSubmit(): void {
    if (this.signupForm.invalid) {
      this.signupForm.markAllAsTouched();

      return;
    }
      const enteredEmail = this.signupForm.value.email;
      const enteredPassword = this.signupForm.value.password;

    const userData = {
      email: 'user@example.com',
      password: 'password123',
    };

    if (enteredEmail !== userData.email) {
      
      this.signupForm.setErrors({ userNotFound: true });
    } else if (enteredPassword !== userData.password) {
      this.signupForm.setErrors({ incorrectPassword: true });
    } else {
      console.log('Login successful');
    }
   
  }
  view() {
    this.show = !this.show
    this.changeType = !this.changeType
  }
}

