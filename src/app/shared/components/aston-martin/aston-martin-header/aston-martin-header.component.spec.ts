import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AstonMartinHeaderComponent } from './aston-martin-header.component';

describe('AstonMartinHeaderComponent', () => {
  let component: AstonMartinHeaderComponent;
  let fixture: ComponentFixture<AstonMartinHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AstonMartinHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AstonMartinHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
