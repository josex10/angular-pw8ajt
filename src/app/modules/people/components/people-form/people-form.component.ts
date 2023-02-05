import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Store } from '@ngrx/store';
import { AppState } from '../../../../core/ngrx/app.state';
import { personListSelector } from '../../../../core/ngrx/selectors';
import { personListActionSuccess } from '../../../../core/ngrx/actions';

import { IPerson } from '../../../../core/interfaces';

import * as uuid from 'uuid';

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

  private personList: IPerson[] = [];

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store
      .select(personListSelector)
      .subscribe((data) => (this.personList = data));
  }

  fnSavePerson() {
    if (this.personForm.valid) {
      const person: IPerson = {
        id: uuid.v4(),
        name: this.personForm.get('frmCtrlName')?.value!,
        lastname: this.personForm.get('frmCtrlLastame')?.value!,
      };
      const tmp: IPerson[] = this.personList.map((obj) => obj);
      tmp.push(person);
      this.store.dispatch(personListActionSuccess({ personList: tmp }));
    }
  }

  get personFormControl() {
    return this.personForm.controls;
  }
}
