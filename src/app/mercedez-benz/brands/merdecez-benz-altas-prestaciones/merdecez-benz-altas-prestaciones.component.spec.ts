import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MerdecezBenzAltasPrestacionesComponent } from './merdecez-benz-altas-prestaciones.component';

describe('MerdecezBenzAltasPrestacionesComponent', () => {
  let component: MerdecezBenzAltasPrestacionesComponent;
  let fixture: ComponentFixture<MerdecezBenzAltasPrestacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MerdecezBenzAltasPrestacionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MerdecezBenzAltasPrestacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
