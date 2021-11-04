import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FerrariFooterComponent } from './ferrari-footer.component';

describe('FerrariFooterComponent', () => {
  let component: FerrariFooterComponent;
  let fixture: ComponentFixture<FerrariFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FerrariFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FerrariFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
