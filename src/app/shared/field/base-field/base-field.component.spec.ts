import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseFieldComponent } from './base-field.component';

describe('BaseFieldComponent', () => {
  let component: BaseFieldComponent;
  let fixture: ComponentFixture<BaseFieldComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BaseFieldComponent]
    });
    fixture = TestBed.createComponent(BaseFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
