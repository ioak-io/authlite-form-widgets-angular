import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { FormElementMessageComponent } from './form-element-message.component';

describe('FormElementMessageComponent', () => {
  let component: FormElementMessageComponent;
  let fixture: ComponentFixture<FormElementMessageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormElementMessageComponent],
      imports: [ReactiveFormsModule],
    });

    fixture = TestBed.createComponent(FormElementMessageComponent);
    component = fixture.componentInstance;
  });

  it('should create the FormElementMessageComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should display error message for blank username', () => {
    component.type = 'error';
    component.blankUsername = 'Username is required';

    fixture.detectChanges();

    const errorMessage: HTMLElement = fixture.nativeElement.querySelector('.error-message');
    expect(errorMessage).toBeTruthy();
    expect(errorMessage.textContent).toContain('Username is required');
  });
  it('should display error message for blank password', () => {
    component.type = 'error';
    component.blankPassword = 'Password is required';

    fixture.detectChanges();

    const errorMessage: HTMLElement = fixture.nativeElement.querySelector('.error-message');
    expect(errorMessage).toBeTruthy();
    expect(errorMessage.textContent).toContain('Password is required');
  });

  it('should display error message for blank Given name', () => {
    component.type = 'error';
    component.blankGivenname = 'Given name is required';

    fixture.detectChanges();

    const errorMessage: HTMLElement = fixture.nativeElement.querySelector('.error-message');
    expect(errorMessage).toBeTruthy();
    expect(errorMessage.textContent).toContain('Given name is required');
  });

  it('should display error message for blank Family name', () => {
    component.type = 'error';
    component.blankFamilyname = 'Family name is required';

    fixture.detectChanges();

    const errorMessage: HTMLElement = fixture.nativeElement.querySelector('.error-message');
    expect(errorMessage).toBeTruthy();
    expect(errorMessage.textContent).toContain('Family name is required');
  });

  it('should display error message for blank retype password', () => {
    component.type = 'error';
    component.blankRetypePassword = 'retype password is required';

    fixture.detectChanges();

    const errorMessage: HTMLElement = fixture.nativeElement.querySelector('.error-message');
    expect(errorMessage).toBeTruthy();
    expect(errorMessage.textContent).toContain('retype password is required');
  });

  it('should display error message for invalid username', () => {
    component.type = 'error';
    component.invalidUsername = 'Invalid username';

    fixture.detectChanges();

    const errorMessage: HTMLElement = fixture.nativeElement.querySelector('.errror-message');
    expect(errorMessage).toBeTruthy();
    expect(errorMessage.textContent).toContain('Invalid username');
  });

  it('should display error message for user not found', () => {
    component.type = 'error';
    component.userNotFound = 'user not found';

    fixture.detectChanges();

    const errorMessage: HTMLElement = fixture.nativeElement.querySelector('.errror-message');
    expect(errorMessage).toBeTruthy();
    expect(errorMessage.textContent).toContain('User not found');
  });

  it('should display error message for Incorrect password', () => {
    component.type = 'error';
    component.incorrectPassword = 'Incorrect password';

    fixture.detectChanges();

    const errorMessage: HTMLElement = fixture.nativeElement.querySelector('.errror-message');
    expect(errorMessage).toBeTruthy();
    expect(errorMessage.textContent).toContain('Incorrect password');
  });

  it('should display error message for Retype password does not match', () => {
    component.type = 'error';
    component.RetypePasswordDoesnotmatch = 'Retype password does not match';

    fixture.detectChanges();

    const errorMessage: HTMLElement = fixture.nativeElement.querySelector('.errror-message');
    expect(errorMessage).toBeTruthy();
    expect(errorMessage.textContent).toContain('Retype password does not match');
  });

  it('should display success message for successful registration', () => {
    component.type = 'success';
    component.userNotFound = 'User registered successfully';

    fixture.detectChanges();

    const successMessage: HTMLElement = fixture.nativeElement.querySelector('.success-message');
    expect(successMessage).toBeTruthy();
    expect(successMessage.textContent).toContain('User registered successfully');
  });
});
