import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LamborghiniMusclecarComponent } from './lamborghini-musclecar.component';

describe('LamborghiniMusclecarComponent', () => {
  let component: LamborghiniMusclecarComponent;
  let fixture: ComponentFixture<LamborghiniMusclecarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LamborghiniMusclecarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LamborghiniMusclecarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
