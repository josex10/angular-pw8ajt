import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { IPerson } from '../../../../core/interfaces';
import { personListSelector } from '../../../../core/ngrx/selectors/person.selector';
import * as uuid from 'uuid';
import { personListActionSuccess } from '../../../../core/ngrx/actions/person.action';

@Component({
  selector: 'app-people-form-component',
  templateUrl: './people-form.component.html',
  styleUrls: ['./people-form.component.css'],
})
export class PeopleFormComponent implements OnInit {
  public personForm = new FormGroup({
    frmCtrlName: new FormControl('', [
      Validators.required,
      Validators.maxLength(60),
    ]),
    frmCtrlLastame: new FormControl('', [
      Validators.required,
      Validators.maxLength(60),
    ]),
  });

  personList: IPerson[] = [];

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.select(personListSelector).subscribe((data) => {
      this.personList = data;
    });
  }

  fnSavePerson() {
    if (this.personForm.valid) {
      console.log('valid');
      const person: IPerson = {
        id: uuid.v4(),
        name: this.personForm.get('frmCtrlName')?.value!,
        lastname: this.personForm.get('frmCtrlLastame')?.value!,
      };
      this.personList.push(person);
      this.store.dispatch(
        personListActionSuccess({ personList: this.personList })
      );
    }
  }

  get personFormControl() {
    return this.personForm.controls;
  }
}
