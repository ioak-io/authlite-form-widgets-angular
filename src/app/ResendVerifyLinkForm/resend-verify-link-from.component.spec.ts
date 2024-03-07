import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { ResendVerifyLinkFormComponent } from './resend-verify-link-form.component';

describe('ResendVerifyLinkFormComponent', () => {
  let component: ResendVerifyLinkFormComponent;
  let fixture: ComponentFixture<ResendVerifyLinkFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResendVerifyLinkFormComponent],
      imports: [ReactiveFormsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResendVerifyLinkFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize form', () => {
    component.initForm();
    expect(component.resendVerifyLinkForm).toBeTruthy();
  });

  it('should have initial values for greeting title, subtitle, and label', () => {
    expect(component.resendVerifyLinkFormGreetingTitle).toBeDefined();
    expect(component.resendVerifyLinkFormGreetingSubtitle).toBeDefined();
    expect(component.resendVerifyLinkFormLabelEmail).toBeDefined();
  });

  it('should return required error message when email field is blank', () => {
    const emailControl = component.resendVerifyLinkForm.get('email');
    emailControl?.setValue('blank-username');
    fixture.detectChanges();
    const errorMessage = component.resendVerifyLinkFormUsernameErrorMessage;
    expect(errorMessage).toEqual(component.translationDictionary['RESEND_VERIFY_LINK_ERROR__BLANK_USERNAME']);
  });
  it('should return invalid email error message when email field format is invalid', () => {
    const emailControl = component.resendVerifyLinkForm.get('email');
    emailControl?.setValue('invalid-username');
    fixture.detectChanges();
    const errorMessage = component.resendVerifyLinkFormInvalidUsername;
    expect(errorMessage).toEqual(component.translationDictionary.RESEND_VERIFY_LINK_ERROR__INVALID_USERNAME);
  });

  it('should return user not found error message when user does not exist', () => {
    const emailControl = component.resendVerifyLinkForm.get('email');
    emailControl?.setValue('user-does-not-exist');
    fixture.detectChanges();
    const errorMessage = component.resendVerifyLinkFormUserNotFound;
    expect(errorMessage).toEqual(component.translationDictionary.RESEND_VERIFY_LINK_ERROR__USER_NOT_FOUND);
  });
  it('should set form errors when submitted with invalid data', () => {
    component.onSubmit();
    expect(component.resendVerifyLinkForm.invalid).toBeTruthy();
    expect(component.resendVerifyLinkForm.hasError('userNotFound')).toBeFalsy();
  });

  it('should log "reset link sent" when user exists and form is valid', () => {
    const originalConsoleLog = console.log;
    let logMessage: string | undefined;
    console.log = (message: any) => logMessage = message;

    component['isUserExists'] = (_email: string) => true;

    component.resendVerifyLinkForm.setValue({ email: 'test@example.com' });

    component.onSubmit();

    expect(logMessage).toBe(`reset link sent to: ${JSON.stringify({ email: 'test@example.com' })}`);

    console.log = originalConsoleLog;
  });

  it('should set userNotFound error when user does not exist', () => {
    const originalIsUserExists = (component as any).isUserExists;
    (component as any).isUserExists = () => false;

    component.resendVerifyLinkForm.setValue({ email: 'nonexistent@example.com' });

    component.onSubmit();

    expect(component.resendVerifyLinkForm.hasError('userNotFound')).toBeTruthy();

    (component as any).isUserExists = originalIsUserExists;
  });

  it('should call isUserExists with entered email', () => {
    const email = 'test@example.com';
    component.resendVerifyLinkForm.patchValue({ email });

    const result = (component as any).isUserExists(email);

    expect(result).toBe(false);
  });
});
