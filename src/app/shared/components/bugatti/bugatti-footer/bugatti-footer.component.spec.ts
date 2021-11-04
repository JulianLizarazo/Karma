import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BugattiFooterComponent } from './bugatti-footer.component';

describe('BugattiFooterComponent', () => {
  let component: BugattiFooterComponent;
  let fixture: ComponentFixture<BugattiFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BugattiFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BugattiFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
