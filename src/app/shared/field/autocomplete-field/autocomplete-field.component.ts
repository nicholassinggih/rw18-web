import { Component, Input } from '@angular/core';
import { BaseFieldComponent } from '../base-field/base-field.component';

interface AutoCompleteCompleteEvent {
  originalEvent: Event;
  query: string;
}

@Component({
  selector: 'app-autocomplete-field',
  templateUrl: './autocomplete-field.component.html',
  styleUrls: ['./autocomplete-field.component.scss']
})
export class AutocompleteFieldComponent extends BaseFieldComponent {
  @Input() forceSelection: boolean = false;
  items: any[] | undefined;

  selectedItem: any;

  suggestions: any[] | undefined;

  search(event: AutoCompleteCompleteEvent) {
      this.suggestions = [...Array(10).keys()].map(item => event.query + '-' + item);
  }
}
