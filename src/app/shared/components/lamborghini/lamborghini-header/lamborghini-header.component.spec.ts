import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LamborghiniHeaderComponent } from './lamborghini-header.component';

describe('LamborghiniHeaderComponent', () => {
  let component: LamborghiniHeaderComponent;
  let fixture: ComponentFixture<LamborghiniHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LamborghiniHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LamborghiniHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
