import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MerdecezHeaderComponent } from './merdecez-header.component';

describe('MerdecezHeaderComponent', () => {
  let component: MerdecezHeaderComponent;
  let fixture: ComponentFixture<MerdecezHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MerdecezHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MerdecezHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
