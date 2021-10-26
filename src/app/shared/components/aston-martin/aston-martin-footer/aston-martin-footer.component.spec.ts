import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AstonMartinFooterComponent } from './aston-martin-footer.component';

describe('AstonMartinFooterComponent', () => {
  let component: AstonMartinFooterComponent;
  let fixture: ComponentFixture<AstonMartinFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AstonMartinFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AstonMartinFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
