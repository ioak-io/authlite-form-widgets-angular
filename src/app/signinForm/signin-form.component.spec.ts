import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { SigninFormComponent } from './signin-form.component';

describe('SigninFormComponent', () => {
  let component: SigninFormComponent;
  let fixture: ComponentFixture<SigninFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SigninFormComponent],
      imports: [ReactiveFormsModule],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SigninFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the form', () => {
    expect(component.signinForm).toBeDefined();
    expect(component.signinForm.controls['email'].value).toEqual('');
    expect(component.signinForm.controls['password'].value).toEqual('');
  });

  it('should show error messages for blank username', () => {
    const emailControl = component.signinForm.get('email');
    emailControl?.setValue('blank-username');
    fixture.detectChanges();
    const errorMessage = component.signinFormUsernameErrorMessage;
    expect(errorMessage).toEqual(component.translationDictionary.SIGNIN_ERROR__BLANK_USERNAME);
  });

  it('should show error message for Invalid Username', () => {
    const emailControl = component.signinForm.get('email');
    emailControl?.setValue('invalid-username');
    fixture.detectChanges();
    const errorMessage = component.signinFormInvalidUsername;
    expect(errorMessage).toEqual(component.translationDictionary.SIGNIN_ERROR__INVALID_USERNAME);
  });

  it('should show error message for username does not exist', () => {
    const emailControl = component.signinForm.get('email');
    component.isUserExists = () => false;
    emailControl?.setValue('username-not-found');
    fixture.detectChanges();
    component.onSubmit();
    const errorMessage = component.signinFormUserNotFound;
    expect(errorMessage).toEqual(component.translationDictionary.SIGNIN_ERROR__USER_NOT_FOUND);
  });

  it('should show error messages for blank password', () => {
    const passwordControl = component.signinForm.get('password');
    passwordControl?.setValue('blank-password');
    fixture.detectChanges();
    const errorMessage = component.signinFormPasswordErrorMessage;
    expect(errorMessage).toEqual(component.translationDictionary.SIGNIN_ERROR__BLANK_PASSWORD);
  });

  it('should show error messages for incorrect password', () => {
    component.isUserExists = () => true;
    const passwordControl = component.signinForm.get('password');
    passwordControl?.setValue('incorrect-password');
    fixture.detectChanges();
    component.onSubmit();
    const errorMessage = component.signinFormIncorrectPassword;
    expect(errorMessage).toEqual(component.translationDictionary.SIGNIN_ERROR__INCORRECT_PASSWORD);
  });

  it('should toggle password visibility', () => {
    expect(component.showPassword).toBeTruthy();
    component.togglePassword();
    expect(component.showPassword).toBeFalsy();
    component.togglePassword();
    expect(component.showPassword).toBeTruthy();
  });

  it('should handle user authentication with entered email and password', () => {
    const enteredEmail = 'test@example.com';
    const enteredPassword = 'testPassword';
  
    component.signinForm.setValue({ email: enteredEmail, password: enteredPassword });
  
    component.isUserExists = () => true;
  
    let consoleLogOutput = '';
    const originalLog = console.log;
    console.log = (message: string) => {
      consoleLogOutput = message;
    };
  
    component.onSubmit();
  
    console.log = originalLog;
  
    expect(consoleLogOutput).toContain('Login Successful');
    expect(consoleLogOutput).toContain(enteredEmail);
    expect(consoleLogOutput).toContain(enteredPassword);
  });

  it('should handle user not found with entered email and password', () => {
    const enteredEmail = 'nonexistent@example.com';
    const enteredPassword = 'testPassword';

    component.signinForm.setValue({ email: enteredEmail, password: enteredPassword });

    component.isUserExists = () => false;

    component.onSubmit();

    expect(component.signinForm.hasError('userNotFound')).toBeTruthy();
  });

  it('should not submit form when invalid', () => {
    
    component.signinForm.controls['email'].setValue('');
    component.signinForm.controls['password'].setValue('');

    component.onSubmit();

    expect(component.signinForm.controls['email'].touched).toBeTruthy();
    expect(component.signinForm.controls['password'].touched).toBeTruthy();
  });

  it('should log "Login Successful" when isUserExists returns true', () => {
    const enteredEmail = 'test@example.com';
    const enteredPassword = 'testPassword';

    component.signinForm.setValue({ email: enteredEmail, password: enteredPassword });

    let consoleLogOutput = '';
    const originalLog = console.log;
    console.log = (message: string) => {
      consoleLogOutput = message;
    };
    component.onSubmit();

    console.log = originalLog;

    expect(consoleLogOutput).toContain('Login Successful');
    expect(consoleLogOutput).toContain(enteredEmail);
    expect(consoleLogOutput).toContain(enteredPassword);
  });

  it('should set userNotFound error when isUserExists returns false', () => {
    component.signinForm.controls['email'].setValue('nonexistent@example.com');
    component.signinForm.controls['password'].setValue('testPassword');
    component.onSubmit();
    expect(component.signinForm.hasError('userNotFound')).toBeTruthy();
  });
 
});