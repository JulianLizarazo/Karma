import { TestBed } from '@angular/core/testing';

import { ReportTypeVehicleService } from './report-type-vehicle.service';

describe('ReportTypeVehicleService', () => {
  let service: ReportTypeVehicleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReportTypeVehicleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
