import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportVehicleType2Component } from './reporte-tipo-moto2.component';

describe('ReportVehicleType2Component', () => {
  let component: ReportVehicleType2Component;
  let fixture: ComponentFixture<ReportVehicleType2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportVehicleType2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportVehicleType2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
