import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MclarenAltasPrestacionesComponent } from './mclaren-altas-prestaciones.component';

describe('MclarenAltasPrestacionesComponent', () => {
  let component: MclarenAltasPrestacionesComponent;
  let fixture: ComponentFixture<MclarenAltasPrestacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MclarenAltasPrestacionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MclarenAltasPrestacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
