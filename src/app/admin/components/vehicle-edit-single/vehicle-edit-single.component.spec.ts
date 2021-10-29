import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleEditSingleComponent } from './vehicle-edit-single.component';

describe('VehicleEditSingleComponent', () => {
  let component: VehicleEditSingleComponent;
  let fixture: ComponentFixture<VehicleEditSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehicleEditSingleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleEditSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
