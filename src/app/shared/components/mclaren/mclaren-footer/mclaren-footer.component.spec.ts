import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MclarenFooterComponent } from './mclaren-footer.component';

describe('MclarenFooterComponent', () => {
  let component: MclarenFooterComponent;
  let fixture: ComponentFixture<MclarenFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MclarenFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MclarenFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
