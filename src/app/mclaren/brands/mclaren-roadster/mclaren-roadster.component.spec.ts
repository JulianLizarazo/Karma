import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MclarenRoadsterComponent } from './mclaren-roadster.component';

describe('MclarenRoadsterComponent', () => {
  let component: MclarenRoadsterComponent;
  let fixture: ComponentFixture<MclarenRoadsterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MclarenRoadsterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MclarenRoadsterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
