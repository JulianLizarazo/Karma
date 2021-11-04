import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MerdecezBenzRoadsterComponent } from './merdecez-benz-roadster.component';

describe('MerdecezBenzRoadsterComponent', () => {
  let component: MerdecezBenzRoadsterComponent;
  let fixture: ComponentFixture<MerdecezBenzRoadsterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MerdecezBenzRoadsterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MerdecezBenzRoadsterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
