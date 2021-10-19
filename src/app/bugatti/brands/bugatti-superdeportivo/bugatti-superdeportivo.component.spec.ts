import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BugattiSuperdeportivoComponent } from './bugatti-superdeportivo.component';

describe('BugattiSuperdeportivoComponent', () => {
  let component: BugattiSuperdeportivoComponent;
  let fixture: ComponentFixture<BugattiSuperdeportivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BugattiSuperdeportivoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BugattiSuperdeportivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
