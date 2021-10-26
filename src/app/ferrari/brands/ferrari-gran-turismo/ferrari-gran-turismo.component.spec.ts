import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FerrariGranTurismoComponent } from './ferrari-gran-turismo.component';

describe('FerrariGranTurismoComponent', () => {
  let component: FerrariGranTurismoComponent;
  let fixture: ComponentFixture<FerrariGranTurismoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FerrariGranTurismoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FerrariGranTurismoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
