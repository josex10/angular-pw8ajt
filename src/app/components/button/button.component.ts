import { Component, Input, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button-component',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  @Input('button-label') button_label: string =
    'Default, please add a button label.';
  @Input('button-disable') button_disable?: boolean = false;

  @Output() clickResponse = new EventEmitter<string>();

  fnButtonClicked(value: any) {
    this.clickResponse.emit(value);
  }
}
