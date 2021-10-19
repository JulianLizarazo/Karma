import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MerdecezFooterComponent } from './merdecez-footer.component';

describe('MerdecezFooterComponent', () => {
  let component: MerdecezFooterComponent;
  let fixture: ComponentFixture<MerdecezFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MerdecezFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MerdecezFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
