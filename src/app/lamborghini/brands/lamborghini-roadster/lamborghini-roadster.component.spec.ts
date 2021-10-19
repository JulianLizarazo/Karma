import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LamborghiniRoadsterComponent } from './lamborghini-roadster.component';

describe('LamborghiniRoadsterComponent', () => {
  let component: LamborghiniRoadsterComponent;
  let fixture: ComponentFixture<LamborghiniRoadsterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LamborghiniRoadsterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LamborghiniRoadsterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
