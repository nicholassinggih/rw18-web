import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-base-field',
  templateUrl: './base-field.component.html',
  styleUrls: ['./base-field.component.scss']
})
export class BaseFieldComponent {

  @Input() disabled: boolean = false;
  @Input() title: string;

  _value: any;
  @Input()
  get value():any {
    return this._value;
  }
  set value(val: any) {
    this._value = val;
    this.valueChange.emit(val);
    this.onChange.emit(val);
  }

  @Output() valueChange: EventEmitter<any> = new EventEmitter<any>();
  @Output() onChange: EventEmitter<any> = new EventEmitter<any>();

}
