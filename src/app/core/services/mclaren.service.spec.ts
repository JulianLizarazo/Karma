import { TestBed } from '@angular/core/testing';

import { MclarenService } from './mclaren.service';

describe('MclarenService', () => {
  let service: MclarenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MclarenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
