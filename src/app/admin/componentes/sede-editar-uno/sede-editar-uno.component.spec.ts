import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampusEditSingleComponent } from './sede-editar-uno.component';

describe('CampusEditSingleComponent', () => {
  let component: CampusEditSingleComponent;
  let fixture: ComponentFixture<CampusEditSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CampusEditSingleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CampusEditSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
