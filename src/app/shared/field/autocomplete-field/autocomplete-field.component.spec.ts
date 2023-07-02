import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocompleteFieldComponent } from './autocomplete-field.component';

describe('AutocompleteFieldComponent', () => {
  let component: AutocompleteFieldComponent;
  let fixture: ComponentFixture<AutocompleteFieldComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AutocompleteFieldComponent]
    });
    fixture = TestBed.createComponent(AutocompleteFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
