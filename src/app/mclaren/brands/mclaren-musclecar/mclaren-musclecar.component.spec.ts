import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MclarenMusclecarComponent } from './mclaren-musclecar.component';

describe('MclarenMusclecarComponent', () => {
  let component: MclarenMusclecarComponent;
  let fixture: ComponentFixture<MclarenMusclecarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MclarenMusclecarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MclarenMusclecarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
