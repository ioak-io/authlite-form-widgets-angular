import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MainFormComponent } from './main-form.component';

describe('MainFormComponent', () => {
  let component: MainFormComponent;
  let fixture: ComponentFixture<MainFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainFormComponent],
    });

    fixture = TestBed.createComponent(MainFormComponent);
    component = fixture.componentInstance;
  });

  it('should create the MainFormComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should have the correct logo input', () => {
    const logoUrl = 'https://authlite-widgets.ioak.io/static/media/authlite_black.449e265c.svg';
    component.logo = logoUrl;

    fixture.detectChanges();

    const logoElement: HTMLElement = fixture.nativeElement.querySelector('.logo');
    expect(logoElement).toBeTruthy();
    expect(logoElement.getAttribute('src')).toBe(logoUrl);
  });

  it('should have the correct placeholder input', () => {
    const placeholderText = 'Enter your information';
    component.placeholder = placeholderText;

    fixture.detectChanges();

    const inputElement: HTMLInputElement = fixture.nativeElement.querySelector('.input-field');
    expect(inputElement).toBeTruthy();
    expect(inputElement.getAttribute('placeholder')).toBe(placeholderText);
  });

});
