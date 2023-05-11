import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampusEditComponent } from './sede-editar.component';

describe('CampusEditComponent', () => {
  let componente: CampusEditComponent;
  let accesorio: ComponentFixture<CampusEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CampusEditComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    accesorio = TestBed.createComponent(CampusEditComponent);
    componente = accesorio.componentInstance;
    accesorio.detectChanges();
  });

  it('should create', () => {
    expect(componente).toBeTruthy();
  });
});
