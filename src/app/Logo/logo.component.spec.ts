import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LogoComponent } from './logo.component';

describe('LogoComponent', () => {
    let component: LogoComponent;
    let fixture: ComponentFixture<LogoComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [LogoComponent],
        });

        fixture = TestBed.createComponent(LogoComponent);
        component = fixture.componentInstance;
    });

    it('should create the LogoComponent', () => {
        expect(component).toBeTruthy();
    });
});
