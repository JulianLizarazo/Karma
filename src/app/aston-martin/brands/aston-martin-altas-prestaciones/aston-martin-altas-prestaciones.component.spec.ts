import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AstonMartinAltasPrestacionesComponent } from './aston-martin-altas-prestaciones.component';

describe('AstonMartinAltasPrestacionesComponent', () => {
  let component: AstonMartinAltasPrestacionesComponent;
  let fixture: ComponentFixture<AstonMartinAltasPrestacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AstonMartinAltasPrestacionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AstonMartinAltasPrestacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
