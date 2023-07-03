import { Component, EventEmitter, Input, Output } from '@angular/core';
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

  @Input() suggestions: any[] | undefined;
  @Output() completeMethod: EventEmitter<AutoCompleteCompleteEvent> = new EventEmitter<AutoCompleteCompleteEvent>();

  onComplete(event: AutoCompleteCompleteEvent) {
    this.completeMethod.emit(event);
  }
}
