import { NgModule, isDevMode } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TableKeysPipe } from './pipes/table-keys.pipe';
import { StoreModule } from '@ngrx/store';
import { ROOT_REDUCERS } from './ngrx/app.state';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [TableKeysPipe],
  imports: [CommonModule, HttpClientModule],
  exports: [TableKeysPipe],
})
export class CoreModule {}
