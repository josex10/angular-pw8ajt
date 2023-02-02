import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PeoplePublicComponent } from './public/people-public.component';
const routes: Routes = [
  {
    path: '',
    component: PeoplePublicComponent,
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicRoutingModule {}
