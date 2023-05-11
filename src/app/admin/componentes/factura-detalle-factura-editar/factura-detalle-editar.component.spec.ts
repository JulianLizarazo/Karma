import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceDetailEditComponent } from './factura-detalle-editar.component';

describe('InvoiceDetailEditComponent', () => {
  let component: InvoiceDetailEditComponent;
  let fixture: ComponentFixture<InvoiceDetailEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvoiceDetailEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceDetailEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
