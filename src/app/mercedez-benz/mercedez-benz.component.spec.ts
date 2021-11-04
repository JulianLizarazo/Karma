import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MercedezBenzComponent } from './mercedez-benz.component';

describe('MercedezBenzComponent', () => {
  let component: MercedezBenzComponent;
  let fixture: ComponentFixture<MercedezBenzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MercedezBenzComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MercedezBenzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
