import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-header-component></app-header-component>
  <router-outlet></router-outlet>
  `,
})
export class AppComponent {}
