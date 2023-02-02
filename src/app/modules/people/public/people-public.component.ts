import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-people-public-component',
  templateUrl: './people-public.component.html',
  styleUrls: ['./people-public.component.css'],
})
export class PeoplePublicComponent implements OnInit {
  ngOnInit(): void {
    console.log('hello from angular');
  }
}
