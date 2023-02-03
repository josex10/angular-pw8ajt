import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPerson } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class PersonService {
  private url = '/assets/data/people-data.json';

  constructor(private http: HttpClient) {}

  fnGetAllPeople(): Observable<IPerson[]> {
    return this.http.get<IPerson[]>(`${this.url}`);
  }
}
