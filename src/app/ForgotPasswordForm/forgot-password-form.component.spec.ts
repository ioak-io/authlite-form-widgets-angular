import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { ForgotPasswordFormComponent } from './forgot-password-form.component';

describe('ForgotPasswordFormComponent', () => {
    let component: ForgotPasswordFormComponent;
    let fixture: ComponentFixture<ForgotPasswordFormComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ForgotPasswordFormComponent],
            imports: [ReactiveFormsModule]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ForgotPasswordFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create component', () => {
        expect(component).toBeTruthy();
    });

    it('should initialize form with email field', () => {
        expect(component.forgotPasswordForm.get('email')).toBeTruthy();
    });

    it('should return required error message when email field is blank', () => {
        const emailControl = component.forgotPasswordForm.get('email');
        emailControl?.setValue('blank-username');
        fixture.detectChanges();
        const errorMessage = component.forgotPasswordFormUsernameErrorMessage;
        expect(errorMessage).toEqual(component.translationDictionary['FORGOT_PASSWORD_ERROR__BLANK_USERNAME']);
    });

    it('should return invalid email error message when email field format is invalid', () => {
        const emailControl = component.forgotPasswordForm.get('email');
        emailControl?.setValue('invalid-username');
        fixture.detectChanges();
        const errorMessage = component.forgotPasswordFormInvalidUsername;
        expect(errorMessage).toEqual(component.translationDictionary.FORGOT_PASSWORD_ERROR__INVALID_USERNAME);
    });

    it('should return user not found error message when user does not exist', () => {
        const emailControl = component.forgotPasswordForm.get('email');
        emailControl?.setValue('user-does-not-exist');
        fixture.detectChanges();
        const errorMessage = component.forgotPasswordFormUserNotFound;
        expect(errorMessage).toEqual(component.translationDictionary.FORGOT_PASSWORD_ERROR__USER_NOT_FOUND);
    });

    it('should not submit the form with invalid input', () => {
        component.onSubmit();
        expect(component.forgotPasswordForm.touched).toBe(true);
        expect(component.passwordResetLinkSent).toBe(false);
    });

    it('should return false for isUserExists when user does not exist', () => {
        const result = component.isUserExists('nonexistent@example.com');
        expect(result).toBe(false);
    });

    it('should log and send password reset link when user exists', () => {
        const originalIsUserExists = component.isUserExists;
        component.isUserExists = (email: string) => true;
        const originalSendPasswordResetLink = component.sendPasswordResetLink;
        let isSendPasswordResetLinkCalled = false;
        component.sendPasswordResetLink = (email: string) => {
            isSendPasswordResetLinkCalled = true;
        };
        const emailControl = component.forgotPasswordForm.get('email');
        emailControl?.setValue('existing@example.com');
        component.onSubmit();
        expect(component.passwordResetLinkSent).toBe(true);
        expect(isSendPasswordResetLinkCalled).toBe(true);
        expect(console.log).toHaveBeenCalledWith('reset link sent to:', 'existing@example.com');
        component.isUserExists = originalIsUserExists;
        component.sendPasswordResetLink = originalSendPasswordResetLink;
    });

    it('should not call sendPasswordResetLink when user does not exist', () => {
        const originalIsUserExists = component.isUserExists;
        const originalSendPasswordResetLink = component.sendPasswordResetLink;
        let isSendPasswordResetLinkCalled = false;
        component.isUserExists = (email: string) => false;
        component.sendPasswordResetLink = () => {
            isSendPasswordResetLinkCalled = true;
        };
        const emailControl = component.forgotPasswordForm.get('email');
        emailControl?.setValue('nonexistent@example.com');
        component.onSubmit();
        expect(component.forgotPasswordForm.hasError('userNotFound')).toBe(true);
        expect(isSendPasswordResetLinkCalled).toBe(false);
        component.isUserExists = originalIsUserExists;
        component.sendPasswordResetLink = originalSendPasswordResetLink;
    });

    it('should set passwordResetLinkSent to true and log the correct message', () => {
        const originalPasswordResetLinkSent = component.passwordResetLinkSent;
        component.sendPasswordResetLink('existing@example.com');
        expect(component.passwordResetLinkSent).toBe(true);
        component.passwordResetLinkSent = originalPasswordResetLinkSent;
        const expectedLogMessage = 'Password reset link sent to existing@example.com';
        expect(console.log).toHaveBeenCalledWith(expectedLogMessage);
    });
});