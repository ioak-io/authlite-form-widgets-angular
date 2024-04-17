import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthliteFormsWidgetsComponent } from './authlite-forms-widgets.component';

describe('AuthliteFormsWidgetsComponent', () => {
  let component: AuthliteFormsWidgetsComponent;
  let fixture: ComponentFixture<AuthliteFormsWidgetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthliteFormsWidgetsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AuthliteFormsWidgetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
