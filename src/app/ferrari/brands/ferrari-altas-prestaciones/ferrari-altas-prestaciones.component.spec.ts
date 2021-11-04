import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FerrariAltasPrestacionesComponent } from './ferrari-altas-prestaciones.component';

describe('FerrariAltasPrestacionesComponent', () => {
  let component: FerrariAltasPrestacionesComponent;
  let fixture: ComponentFixture<FerrariAltasPrestacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FerrariAltasPrestacionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FerrariAltasPrestacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
