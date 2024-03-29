import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleTypeEditComponent } from './tipo-moto-editar.component';

describe('VehicleTypeEditComponent', () => {
  let component: VehicleTypeEditComponent;
  let fixture: ComponentFixture<VehicleTypeEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehicleTypeEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleTypeEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
