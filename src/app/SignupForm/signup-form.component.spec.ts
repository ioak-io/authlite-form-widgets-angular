import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { SignupFormComponent } from './signup-form.component';

describe('SignupFormComponent', () => {
    let component: SignupFormComponent;
    let fixture: ComponentFixture<SignupFormComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ReactiveFormsModule],
            declarations: [SignupFormComponent],
        })
            .compileComponents();
    });
    beforeEach(() => {
        fixture = TestBed.createComponent(SignupFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create the component', () => {
        expect(component).toBeTruthy();
    });

    it('should initialize the form with the required controls', () => {
        expect(component.signupForm).toBeDefined();
        expect(component.signupForm.controls['given_name']).toBeDefined();
        expect(component.signupForm.controls['family_name']).toBeDefined();
        expect(component.signupForm.controls['email']).toBeDefined();
        expect(component.signupForm.controls['password']).toBeDefined();
        expect(component.signupForm.controls['retype_password']).toBeDefined();
    });

    it('should toggle password visibility', () => {
        expect(component.showPassword).toBeTruthy();
        component.togglePassword();
        expect(component.showPassword).toBeFalsy();
        component.togglePassword();
        expect(component.showPassword).toBeTruthy();
    });

    it('should have signup form fields with proper validators', () => {
        const controls = component.signupForm.controls;
        expect(controls['given_name'].validator).toBe(Validators.required);
        expect(controls['family_name'].validator).toBe(Validators.required);
        expect(controls['email'].validator).toEqual([Validators.required, Validators.email]);
        expect(controls['password'].validator).toBe(Validators.required);
        expect(controls['retype_password'].validator).toBe(Validators.required);
    });

    it('should show error messages for blank givenname', () => {
        const givenNameControl = component.signupForm.get('given_name');
        givenNameControl?.setValue('blank-given_name');
        fixture.detectChanges();
        const errorMessage = component.signupFormGivennameErrorMessage;
        expect(errorMessage).toEqual(component.translationDictionary.SIGNUP_ERROR__BLANK_GIVENNAME);
    });
    it('should show error messages for blank familyname', () => {
        const familyNameControl = component.signupForm.get('family_name');
        familyNameControl?.setValue('blank-family_name');
        fixture.detectChanges();
        const errorMessage = component.signupFormFamilynameErrorMessage;
        expect(errorMessage).toEqual(component.translationDictionary.SIGNUP_ERROR__BLANK_FAMILYNAME);
    });
    it('should show error messages for blank username', () => {
        const emailControl = component.signupForm.get('email');
        emailControl?.setValue('blank-username');
        fixture.detectChanges();
        const errorMessage = component.signupFormUsernameErrorMessage;
        expect(errorMessage).toEqual(component.translationDictionary.SIGNUP_ERROR__BLANK_USERNAME);
    });
    it('should show error message for Invalid username', () => {
        const emailControl = component.signupForm.get('email');
        emailControl?.setValue('invalid-username');
        fixture.detectChanges();
        const errorMessage = component.signupFormInvalidUsername;
        expect(errorMessage).toEqual(component.translationDictionary.SIGNUP_ERROR__INVALID_USERNAME);
    });
    it('should show error messages for blank password', () => {
        const passwordControl = component.signupForm.get('password');
        passwordControl?.setValue('blank-password');
        fixture.detectChanges();
        const errorMessage = component.signupFormPasswordErrorMessage;
        expect(errorMessage).toEqual(component.translationDictionary.SIGNUP_ERROR__BLANK_PASSWORD);
    });

    it('should show error messages for blank retype_password', () => {
        const retypePasswordControl = component.signupForm.get('retype_password');
        retypePasswordControl?.setValue('blank-retype_password');
        fixture.detectChanges();
        const errorMessage = component.signupFormReTypePasswordErrorMessage;
        expect(errorMessage).toEqual(component.translationDictionary.SIGNUP_ERROR__BLANK_RETYPEPASSWORD);
    });

    it('should show error messages for password does not match', () => {
        const passwordDoesNotMatchControl = component.signupForm.get('retype_password');
        passwordDoesNotMatchControl?.setValue('password_does_not_match');
        fixture.detectChanges();
        const errorMessage = component.signupFormReTypePasswordDoesnotMatch;
        expect(errorMessage).toEqual(component.translationDictionary.SIGNUP_ERROR__PASSWORDS_DO_NOT_MATCH);
    });

    it('should have passwordMatchValidator', () => {
        const passwordMatch = component.passwordMatchValidator(component.signupForm);
        expect(passwordMatch).toBeNull();

        component.signupForm.patchValue({
            password: 'password1',
            retype_password: 'password2',
        });
        const mismatchedPassword = component.passwordMatchValidator(component.signupForm);
        expect(mismatchedPassword).toEqual({ 'passwordMismatch': true });
    });

    it('should not submit if form is invalid', () => {

        component.signupForm.markAsDirty();
        const originalLog = console.log;
        let consoleOutput = '';
        console.log = (message: any) => (consoleOutput = message);

        component.onSubmit();

        expect(consoleOutput).toBe('');
        expect(component.signupForm.invalid).toBe(true);
        expect(component.signupForm.touched).toBe(true);

        console.log = originalLog;
    });

    it('should submit if form is valid', () => {

        component.signupForm.setValue({
            given_name: 'abc',
            family_name: 'abc',
            email: 'abc@wes.com',
            password: 'password123',
            retype_password: 'password123',
        });

        const originalLog = console.log;
        let consoleOutput = '';
        console.log = (message: any) => (consoleOutput = message);

        component.onSubmit();

        expect(consoleOutput).toContain('Signup Successful:');
        expect(component.signupForm.invalid).toBe(false);
        expect(component.signupForm.touched).toBe(false);

        console.log = originalLog;
    });
});