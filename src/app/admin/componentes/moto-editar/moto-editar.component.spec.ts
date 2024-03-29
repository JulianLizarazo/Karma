import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleEditComponent } from './moto-editar.component';

describe('VehicleEditComponent', () => {
  let component: VehicleEditComponent;
  let fixture: ComponentFixture<VehicleEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehicleEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
