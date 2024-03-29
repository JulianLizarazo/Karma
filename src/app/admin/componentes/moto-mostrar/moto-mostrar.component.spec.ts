import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleShowComponent } from './moto-mostrar.component';

describe('VehicleShowComponent', () => {
  let component: VehicleShowComponent;
  let fixture: ComponentFixture<VehicleShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehicleShowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
