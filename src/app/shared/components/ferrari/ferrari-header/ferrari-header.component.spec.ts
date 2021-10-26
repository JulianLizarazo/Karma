import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FerrariHeaderComponent } from './ferrari-header.component';

describe('FerrariHeaderComponent', () => {
  let component: FerrariHeaderComponent;
  let fixture: ComponentFixture<FerrariHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FerrariHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FerrariHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
