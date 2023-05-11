import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleTypeShowComponent } from './tipo-moto-mostrar.component';

describe('VehicleTypeShowComponent', () => {
  let component: VehicleTypeShowComponent;
  let fixture: ComponentFixture<VehicleTypeShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehicleTypeShowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleTypeShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
