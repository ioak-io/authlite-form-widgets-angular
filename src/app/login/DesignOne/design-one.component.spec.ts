import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DesignOneComponent } from './design-one.component';

describe('DesignOneComponent', () => {
  let component: DesignOneComponent;
  let fixture: ComponentFixture<DesignOneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DesignOneComponent],
    });

    fixture = TestBed.createComponent(DesignOneComponent);
    component = fixture.componentInstance;
  });

  it('should create the DesignOneComponent', () => {
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

});
