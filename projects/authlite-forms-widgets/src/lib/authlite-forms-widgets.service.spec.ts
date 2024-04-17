import { TestBed } from '@angular/core/testing';

import { AuthliteFormsWidgetsService } from './authlite-forms-widgets.service';

describe('AuthliteFormsWidgetsService', () => {
  let service: AuthliteFormsWidgetsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthliteFormsWidgetsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
