import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MclarenGranTurismoComponent } from './mclaren-gran-turismo.component';

describe('MclarenGranTurismoComponent', () => {
  let component: MclarenGranTurismoComponent;
  let fixture: ComponentFixture<MclarenGranTurismoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MclarenGranTurismoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MclarenGranTurismoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
