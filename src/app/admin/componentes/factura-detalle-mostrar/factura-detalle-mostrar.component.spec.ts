import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceDetailShowComponent } from './factura-detalle-mostrar.component';

describe('InvoiceDetailShowComponent', () => {
  let component: InvoiceDetailShowComponent;
  let fixture: ComponentFixture<InvoiceDetailShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvoiceDetailShowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceDetailShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
