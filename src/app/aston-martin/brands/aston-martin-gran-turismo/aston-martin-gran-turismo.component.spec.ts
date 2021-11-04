import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AstonMartinGranTurismoComponent } from './aston-martin-gran-turismo.component';

describe('AstonMartinGranTurismoComponent', () => {
  let component: AstonMartinGranTurismoComponent;
  let fixture: ComponentFixture<AstonMartinGranTurismoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AstonMartinGranTurismoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AstonMartinGranTurismoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
