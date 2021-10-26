import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AstonMartinSuperdeportivosComponent } from './aston-martin-superdeportivos.component';

describe('AstonMartinSuperdeportivosComponent', () => {
  let component: AstonMartinSuperdeportivosComponent;
  let fixture: ComponentFixture<AstonMartinSuperdeportivosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AstonMartinSuperdeportivosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AstonMartinSuperdeportivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
