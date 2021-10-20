import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MerdecezBenzMusclecarComponent } from './merdecez-benz-musclecar.component';

describe('MerdecezBenzMusclecarComponent', () => {
  let component: MerdecezBenzMusclecarComponent;
  let fixture: ComponentFixture<MerdecezBenzMusclecarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MerdecezBenzMusclecarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MerdecezBenzMusclecarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
