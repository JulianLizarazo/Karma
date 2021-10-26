import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FerrariRoadsterComponent } from './ferrari-roadster.component';

describe('FerrariRoadsterComponent', () => {
  let component: FerrariRoadsterComponent;
  let fixture: ComponentFixture<FerrariRoadsterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FerrariRoadsterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FerrariRoadsterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
