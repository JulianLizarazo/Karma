import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MerdecezBenzSuperdeportivoComponent } from './merdecez-benz-superdeportivo.component';

describe('MerdecezBenzSuperdeportivoComponent', () => {
  let component: MerdecezBenzSuperdeportivoComponent;
  let fixture: ComponentFixture<MerdecezBenzSuperdeportivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MerdecezBenzSuperdeportivoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MerdecezBenzSuperdeportivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
