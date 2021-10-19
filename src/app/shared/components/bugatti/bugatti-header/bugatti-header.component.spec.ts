import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BugattiHeaderComponent } from './bugatti-header.component';

describe('BugattiHeaderComponent', () => {
  let component: BugattiHeaderComponent;
  let fixture: ComponentFixture<BugattiHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BugattiHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BugattiHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
