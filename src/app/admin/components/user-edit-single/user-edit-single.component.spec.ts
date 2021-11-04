import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserEditSingleComponent } from './user-edit-single.component';

describe('UserEditSingleComponent', () => {
  let component: UserEditSingleComponent;
  let fixture: ComponentFixture<UserEditSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserEditSingleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserEditSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
