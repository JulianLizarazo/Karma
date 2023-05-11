import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceDetailEditSingleComponent } from './factura-detalle-editar-uno.component';

describe('InvoiceDetailEditSingleComponent', () => {
  let component: InvoiceDetailEditSingleComponent;
  let fixture: ComponentFixture<InvoiceDetailEditSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvoiceDetailEditSingleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceDetailEditSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
