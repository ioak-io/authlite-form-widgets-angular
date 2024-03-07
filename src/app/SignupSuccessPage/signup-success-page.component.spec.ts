import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SignupSuccessPageComponent } from './signup-success-page.component';

describe('SignupSuccessPageComponent', () => {
  let component: SignupSuccessPageComponent;
  let fixture: ComponentFixture<SignupSuccessPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignupSuccessPageComponent],
    });

    fixture = TestBed.createComponent(SignupSuccessPageComponent);
    component = fixture.componentInstance;
  });

  it('should create the SignupSuccessPageComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should display the heading correctly', () => {
    component.heading = 'Signup Successful';

    fixture.detectChanges();

    const headingElement: HTMLElement = fixture.nativeElement.querySelector('h1');
    expect(headingElement).toBeTruthy();
    expect(headingElement.textContent).toContain('Signup Successful');
  });

  it('should display child components', () => {
    const mockChildComponent = {
    };
    component.children = mockChildComponent;

    fixture.detectChanges();

    const childComponent: HTMLElement = fixture.nativeElement.querySelector('.child-component');
    expect(childComponent).toBeTruthy();
  });

});
