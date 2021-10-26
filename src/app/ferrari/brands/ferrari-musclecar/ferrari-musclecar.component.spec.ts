import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FerrariMusclecarComponent } from './ferrari-musclecar.component';

describe('FerrariMusclecarComponent', () => {
  let component: FerrariMusclecarComponent;
  let fixture: ComponentFixture<FerrariMusclecarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FerrariMusclecarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FerrariMusclecarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
