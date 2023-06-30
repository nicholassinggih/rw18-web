import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-base-field',
  templateUrl: './base-field.component.html',
  styleUrls: ['./base-field.component.scss']
})
export class BaseFieldComponent {

  @Input() disabled: boolean = false;
  @Input() title: string;
  @Input() value: any;
  @Output() valueChange: EventEmitter<any> = new EventEmitter<any>();
}
