import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LamborghiniFooterComponent } from './lamborghini-footer.component';

describe('LamborghiniFooterComponent', () => {
  let component: LamborghiniFooterComponent;
  let fixture: ComponentFixture<LamborghiniFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LamborghiniFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LamborghiniFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
