import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AstonMartinMusclecarComponent } from './aston-martin-musclecar.component';

describe('AstonMartinMusclecarComponent', () => {
  let component: AstonMartinMusclecarComponent;
  let fixture: ComponentFixture<AstonMartinMusclecarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AstonMartinMusclecarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AstonMartinMusclecarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
