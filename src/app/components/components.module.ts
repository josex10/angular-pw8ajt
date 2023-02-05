/**
 * Angular Modules
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

/**
 * Custom Modules
 */
import { CoreModule } from '../core/core.module';

/**
 * Components
 */
import { HeaderComponent } from './header/header.component';
import { ButtonComponent } from './button/button.component';
import { TableComponent } from './table/table.component';
import { InputComponent } from './input/input.component';

@NgModule({
  declarations: [
    HeaderComponent,
    ButtonComponent,
    TableComponent,
    InputComponent,
  ],
  exports: [HeaderComponent, ButtonComponent, TableComponent, InputComponent],
  imports: [CommonModule, FormsModule, CoreModule],
})
export class ComponentsModule {}
