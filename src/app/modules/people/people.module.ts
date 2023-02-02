import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleFormComponent } from './components/people-form/people-form.component';
import { PeopleTableComponent } from './components/people-table/people-table.component';
import { PeoplePublicComponent } from './public/people-public.component';
import { PublicRoutingModule } from './people-routing.module';
import { ComponentsModule } from '../../components/components.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PeopleFormComponent,
    PeopleTableComponent,
    PeoplePublicComponent,
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    ComponentsModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class PeopleModule {}
