import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BugattiRoadsterComponent } from './bugatti-roadster.component';

describe('BugattiRoadsterComponent', () => {
  let component: BugattiRoadsterComponent;
  let fixture: ComponentFixture<BugattiRoadsterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BugattiRoadsterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BugattiRoadsterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
