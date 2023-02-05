/**
 * Angular Modules
 */
import { NgModule, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

/**
 * Components
 */
import { TableKeysPipe } from './pipes/table-keys.pipe';

@NgModule({
  declarations: [TableKeysPipe],
  imports: [CommonModule, HttpClientModule],
  exports: [TableKeysPipe],
})
export class CoreModule {}
