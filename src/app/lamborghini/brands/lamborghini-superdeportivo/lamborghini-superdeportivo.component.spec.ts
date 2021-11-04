import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LamborghiniSuperdeportivoComponent } from './lamborghini-superdeportivo.component';

describe('LamborghiniSuperdeportivoComponent', () => {
  let component: LamborghiniSuperdeportivoComponent;
  let fixture: ComponentFixture<LamborghiniSuperdeportivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LamborghiniSuperdeportivoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LamborghiniSuperdeportivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
