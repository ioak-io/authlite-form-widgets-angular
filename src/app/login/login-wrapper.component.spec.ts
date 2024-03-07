import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginWrapperComponent } from './login-wrapper.component';

describe('LoginWrapperComponent', () => {
  let component: LoginWrapperComponent;
  let fixture: ComponentFixture<LoginWrapperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginWrapperComponent],
    });

    fixture = TestBed.createComponent(LoginWrapperComponent);
    component = fixture.componentInstance;
  });

  it('should create the LoginWrapperComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should display the signin greeting title and subtitle correctly', () => {
    component.signinGreetingTitle = 'Hello again';
    component.signinGreetingSubtitle = 'Sign in to your account';

    fixture.detectChanges();

    const titleElement: HTMLElement = fixture.nativeElement.querySelector('.signin-greeting-title');
    const subtitleElement: HTMLElement = fixture.nativeElement.querySelector('.signin-greeting-subtitle');

    expect(titleElement).toBeTruthy();
    expect(subtitleElement).toBeTruthy();
    expect(titleElement.textContent).toContain('Hello again');
    expect(subtitleElement.textContent).toContain('Sign in to your account');
  });

  it('should display the signup greeting title and subtitle correctly', () => {
    component.signupGreetingTitle = 'Create an Account';
    component.signupGreetingSubtitle = 'Join our community';

    fixture.detectChanges();

    const titleElement: HTMLElement = fixture.nativeElement.querySelector('.signup-greeting-title');
    const subtitleElement: HTMLElement = fixture.nativeElement.querySelector('.signup-greeting-subtitle');

    expect(titleElement).toBeTruthy();
    expect(subtitleElement).toBeTruthy();
    expect(titleElement.textContent).toContain('Create an Account');
    expect(subtitleElement.textContent).toContain('Join our community');
  });

  it('should display the forgot password form greeting title and subtitle correctly', () => {
    component.forgotPasswordGreetingTitle = 'Password reset';
    component.forgotPasswordGreetingSubtitle = 'Enter your registered email address';

    fixture.detectChanges();

    const titleElement: HTMLElement = fixture.nativeElement.querySelector('.forgot-password-greeting-title');
    const subtitleElement: HTMLElement = fixture.nativeElement.querySelector('.forgot-password-greeting-subtitle');

    expect(titleElement).toBeTruthy();
    expect(subtitleElement).toBeTruthy();
    expect(titleElement.textContent).toContain('Password reset');
    expect(subtitleElement.textContent).toContain('Enter your registered email address');
  });

  it('should display the resend verify link form greeting title and subtitle correctly', () => {
    component.resendVerifyLinkFormGreetingTitle = 'Email confirmation link';
    component.resendVerifyLinkFormGreetingSubtitle = 'Have not received a confirmation link';

    fixture.detectChanges();

    const titleElement: HTMLElement = fixture.nativeElement.querySelector('.resend-verify-link-form-greeting-title');
    const subtitleElement: HTMLElement = fixture.nativeElement.querySelector('.resend-verify-link-form-greeting-subtitle');

    expect(titleElement).toBeTruthy();
    expect(subtitleElement).toBeTruthy();
    expect(titleElement.textContent).toContain('Email confirmation link');
    expect(subtitleElement.textContent).toContain('Have not received a confirmation link');
  });

});
