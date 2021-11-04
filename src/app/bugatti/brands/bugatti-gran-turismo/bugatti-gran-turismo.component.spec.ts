import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BugattiGranTurismoComponent } from './bugatti-gran-turismo.component';

describe('BugattiGranTurismoComponent', () => {
  let component: BugattiGranTurismoComponent;
  let fixture: ComponentFixture<BugattiGranTurismoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BugattiGranTurismoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BugattiGranTurismoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
