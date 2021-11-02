import { TestBed } from '@angular/core/testing';

import { ReportVehicleType2Service } from './report-vehicle-type2.service';

describe('ReportVehicleType2Service', () => {
  let service: ReportVehicleType2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReportVehicleType2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
