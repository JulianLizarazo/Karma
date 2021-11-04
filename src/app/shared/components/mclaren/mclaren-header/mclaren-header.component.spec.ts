import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MclarenHeaderComponent } from './mclaren-header.component';

describe('MclarenHeaderComponent', () => {
  let component: MclarenHeaderComponent;
  let fixture: ComponentFixture<MclarenHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MclarenHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MclarenHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
