import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceDetailListComponent } from './invoice-detail-list.component';

describe('InvoiceDetailListComponent', () => {
  let component: InvoiceDetailListComponent;
  let fixture: ComponentFixture<InvoiceDetailListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvoiceDetailListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceDetailListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
