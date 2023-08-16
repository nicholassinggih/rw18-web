import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyBillComponent } from './property-bill.component';

describe('PropertyBillComponent', () => {
  let component: PropertyBillComponent;
  let fixture: ComponentFixture<PropertyBillComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PropertyBillComponent]
    });
    fixture = TestBed.createComponent(PropertyBillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
