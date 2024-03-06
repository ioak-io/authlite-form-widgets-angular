import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TaglineComponent } from './tagline.component';

describe('TaglineComponent', () => {
  let component: TaglineComponent;
  let fixture: ComponentFixture<TaglineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaglineComponent],
    });

    fixture = TestBed.createComponent(TaglineComponent);
    component = fixture.componentInstance;
  });

  it('should create the TaglineComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should display the title and subtitle correctly', () => {
    component.title = 'title';
    component.subtitle = 'subtitle';

    fixture.detectChanges();

    const titleElement: HTMLElement = fixture.nativeElement.querySelector('.title');
    const subtitleElement: HTMLElement = fixture.nativeElement.querySelector('.subtitle');

    expect(titleElement).toBeTruthy();
    expect(subtitleElement).toBeTruthy();
    expect(titleElement.textContent).toContain('title');
    expect(subtitleElement.textContent).toContain('subtitle');
  });

});
