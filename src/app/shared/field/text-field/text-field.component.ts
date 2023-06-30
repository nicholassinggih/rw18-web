import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-text-field',
  templateUrl: './text-field.component.html',
  styleUrls: ['./text-field.component.scss']
})
export class TextFieldComponent {
  @Input() title: string;
  @Input() value: any;
  @Output() valueChange: EventEmitter<any> = new EventEmitter<any>();
}
