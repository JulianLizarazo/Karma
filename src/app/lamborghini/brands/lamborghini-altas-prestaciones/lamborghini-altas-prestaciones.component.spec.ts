import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LamborghiniAltasPrestacionesComponent } from './lamborghini-altas-prestaciones.component';

describe('LamborghiniAltasPrestacionesComponent', () => {
  let component: LamborghiniAltasPrestacionesComponent;
  let fixture: ComponentFixture<LamborghiniAltasPrestacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LamborghiniAltasPrestacionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LamborghiniAltasPrestacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
