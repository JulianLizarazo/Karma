import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleTypeListComponent } from './tipo-moto-listar.component';

describe('VehicleTypeListComponent', () => {
  let component: VehicleTypeListComponent;
  let fixture: ComponentFixture<VehicleTypeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehicleTypeListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleTypeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
