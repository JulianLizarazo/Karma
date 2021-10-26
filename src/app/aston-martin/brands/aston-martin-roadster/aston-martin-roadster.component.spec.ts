import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AstonMartinRoadsterComponent } from './aston-martin-roadster.component';

describe('AstonMartinRoadsterComponent', () => {
  let component: AstonMartinRoadsterComponent;
  let fixture: ComponentFixture<AstonMartinRoadsterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AstonMartinRoadsterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AstonMartinRoadsterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
