import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MclarenSuperdeportivoComponent } from './mclaren-superdeportivo.component';

describe('MclarenSuperdeportivoComponent', () => {
  let component: MclarenSuperdeportivoComponent;
  let fixture: ComponentFixture<MclarenSuperdeportivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MclarenSuperdeportivoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MclarenSuperdeportivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
