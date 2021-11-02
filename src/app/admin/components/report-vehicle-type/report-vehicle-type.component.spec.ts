import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportVehicleTypeComponent } from './report-vehicle-type.component';

describe('ReportVehicleTypeComponent', () => {
  let component: ReportVehicleTypeComponent;
  let fixture: ComponentFixture<ReportVehicleTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportVehicleTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportVehicleTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
