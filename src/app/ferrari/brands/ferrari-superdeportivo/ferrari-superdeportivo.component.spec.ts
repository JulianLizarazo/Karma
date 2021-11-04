import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FerrariSuperdeportivoComponent } from './ferrari-superdeportivo.component';

describe('FerrariSuperdeportivoComponent', () => {
  let component: FerrariSuperdeportivoComponent;
  let fixture: ComponentFixture<FerrariSuperdeportivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FerrariSuperdeportivoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FerrariSuperdeportivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
