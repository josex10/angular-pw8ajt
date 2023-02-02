import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleFormComponent } from './components/people-form/people-form.component';
import { PeopleTableComponent } from './components/people-table/people-table.component';
import { PeoplePublicComponent } from './public/people-public.component';

@NgModule({
  declarations: [
    PeopleFormComponent,
    PeopleTableComponent,
    PeoplePublicComponent,
  ],
  imports: [CommonModule],
})
export class PeopleModule {}
