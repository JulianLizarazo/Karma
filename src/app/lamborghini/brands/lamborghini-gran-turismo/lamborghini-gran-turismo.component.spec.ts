import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LamborghiniGranTurismoComponent } from './lamborghini-gran-turismo.component';

describe('LamborghiniGranTurismoComponent', () => {
  let component: LamborghiniGranTurismoComponent;
  let fixture: ComponentFixture<LamborghiniGranTurismoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LamborghiniGranTurismoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LamborghiniGranTurismoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
