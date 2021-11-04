import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BugattiAltasPrestacionesComponent } from './bugatti-altas-prestaciones.component';

describe('BugattiAltasPrestacionesComponent', () => {
  let component: BugattiAltasPrestacionesComponent;
  let fixture: ComponentFixture<BugattiAltasPrestacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BugattiAltasPrestacionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BugattiAltasPrestacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
