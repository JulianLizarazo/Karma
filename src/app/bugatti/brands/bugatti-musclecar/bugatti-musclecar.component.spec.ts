import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BugattiMusclecarComponent } from './bugatti-musclecar.component';

describe('BugattiMusclecarComponent', () => {
  let component: BugattiMusclecarComponent;
  let fixture: ComponentFixture<BugattiMusclecarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BugattiMusclecarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BugattiMusclecarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
