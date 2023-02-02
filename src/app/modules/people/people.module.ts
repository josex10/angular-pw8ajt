import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleFormComponent } from './components/people-form/people-form.component';
import { PeopleTableComponent } from './components/people-table/people-table.component';
import { PeoplePublicComponent } from './public/people-public.component';
import { PublicRoutingModule } from './people-routing.module';

@NgModule({
  declarations: [
    PeopleFormComponent,
    PeopleTableComponent,
    PeoplePublicComponent,
  ],
  imports: [CommonModule, PublicRoutingModule],
})
export class PeopleModule {}
