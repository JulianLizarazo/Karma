import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceEditSingleComponent } from './invoice-edit-single.component';

describe('InvoiceEditSingleComponent', () => {
  let component: InvoiceEditSingleComponent;
  let fixture: ComponentFixture<InvoiceEditSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvoiceEditSingleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceEditSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
