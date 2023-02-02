import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ButtonComponent } from './button/button.component';
import { TableComponent } from './table/table.component';
import { InputComponent } from './input/input.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HeaderComponent,
    ButtonComponent,
    TableComponent,
    InputComponent,
  ],
  exports: [HeaderComponent, ButtonComponent, TableComponent, InputComponent],
  imports: [CommonModule, FormsModule],
})
export class ComponentsModule {}
