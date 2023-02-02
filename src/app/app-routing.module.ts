import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PeoplePublicComponent } from './modules/people/public/people-public.component';

const routes: Routes = [
  {
    path: 'people',
    loadChildren: () =>
      import('./modules/people/people.module').then((m) => m.PeopleModule),
  },
  {
    path: '**',
    redirectTo: 'people',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
