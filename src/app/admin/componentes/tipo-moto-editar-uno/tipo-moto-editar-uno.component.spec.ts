import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleTypeEditSingleComponent } from './tipo-moto-editar-uno.component';

describe('VehicleTypeEditSingleComponent', () => {
  let component: VehicleTypeEditSingleComponent;
  let fixture: ComponentFixture<VehicleTypeEditSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehicleTypeEditSingleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleTypeEditSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
