import { Component, Input } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-input-component',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements ControlValueAccessor {
  @Input('input-label') input_label: string = 'Default, please add a label';
  @Input('input-type') input_type: string = 'text';
  @Input('input-value') input_value?: string;
  @Input('input-disabled') input_disabled: boolean = false;

  public onChange: Function = (value: string) => {};
  public onTouched: Function = () => {};

  constructor() {}

  writeValue(value: string): void {
    this.input_value = value;
  }

  registerOnChange(onChange: any): void {
    this.onChange = onChange;
  }

  registerOnTouched(onTouched: any): void {
    this.onTouched = onTouched;
  }

  setDisabledState(isDisabled: boolean): void {
    this.input_disabled = isDisabled;
  }
}
