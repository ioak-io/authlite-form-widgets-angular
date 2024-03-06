import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent],
    });

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
  });

  it('should create the HeaderComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should have the correct logo input', () => {
    const logoUrl = 'https://authlite-widgets.ioak.io/static/media/authlite_black.449e265c.svg';
    component.logo = logoUrl;

    fixture.detectChanges();

    const logoElement: HTMLElement = fixture.nativeElement.querySelector('img');
    expect(logoElement).toBeTruthy();
    expect(logoElement.getAttribute('src')).toBe(logoUrl);
  });

  it('should have the correct header input', () => {
    const headerText = 'Test Header';
    component.header = headerText;

    fixture.detectChanges();

    const headerElement: HTMLElement = fixture.nativeElement.querySelector('h1');
    expect(headerElement).toBeTruthy();
    expect(headerElement.textContent).toBe(headerText);
  });
});
