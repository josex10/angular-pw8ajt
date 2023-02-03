import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { IPerson } from '../../../../core/interfaces';
import { personListSelector } from '../../../../core/ngrx/selectors/person.selector';
import * as uuid from 'uuid';
import { personListActionSuccess } from '../../../../core/ngrx/actions/person.action';
import { take } from 'rxjs/operators';
import { AppState } from '../../../../core/ngrx/app.state';

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
  private personList$: Observable<IPerson[]>;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.personList$ = this.store.select(personListSelector);
    this.personList$ = this.store.select(personListSelector).pipe(
      map((person) => {
        console.log(person);
        const personList = person.map((tmpPerson) => tmpPerson);

        return personList;
      })
    );
  }

  fnSavePerson() {
    if (this.personForm.valid) {
      const person: IPerson = {
        id: uuid.v4(),
        name: this.personForm.get('frmCtrlName')?.value!,
        lastname: this.personForm.get('frmCtrlLastame')?.value!,
      };
      /*
      this.store
        .pipe(take(1))
        .subscribe((s) => (this.personList = s.personListState));
        */
      console.log(this.personList);
      this.personList$.pipe(
        map((obj) => {
          console.log(obj);
          this.personList = obj.map((tmp) => tmp);
        })
      );

      console.log(this.personList);
      const tmp: IPerson[] = this.personList.map((obj) => obj);
      console.log(tmp);
      tmp.push(person);
      this.store.dispatch(personListActionSuccess({ personList: tmp }));
    }
  }

  get personFormControl() {
    return this.personForm.controls;
  }
}
