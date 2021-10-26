import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MerdecezBenzGranTurismoComponent } from './merdecez-benz-gran-turismo.component';

describe('MerdecezBenzGranTurismoComponent', () => {
  let component: MerdecezBenzGranTurismoComponent;
  let fixture: ComponentFixture<MerdecezBenzGranTurismoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MerdecezBenzGranTurismoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MerdecezBenzGranTurismoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
