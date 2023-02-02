import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeoplePublicComponent } from './modules/people/public/people-public.component';

const routes: Routes = [
  {
    path: 'people',
    component: PeoplePublicComponent,
  },
  {
    path: '**',
    redirectTo: 'people',
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
