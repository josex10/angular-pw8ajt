import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TableKeysPipe } from './pipes/table-keys.pipe';
import { StoreModule } from '@ngrx/store';
import { ROOT_REDUCERS } from './ngrx/app.state';

@NgModule({
  declarations: [TableKeysPipe],
  imports: [CommonModule, HttpClientModule, StoreModule.forRoot(ROOT_REDUCERS)],
  exports: [TableKeysPipe],
})
export class CoreModule {}
