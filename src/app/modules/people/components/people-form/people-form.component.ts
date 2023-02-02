import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-people-form-component',
  templateUrl: './people-form.component.html',
  styleUrls: ['./people-form.component.css'],
})
export class PeopleFormComponent {
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

  constructor(private store: Store) {}

  fnAddPerson() {
    if (this.personForm.valid) {
      /*
      this.anyUserLoginAuth = {
        clm_username: this.loginForm.get('frmCtrlUsername')?.value!, 
        clm_password: this.loginForm.get('frmCtrlPassword')?.value!
      }
      this.store.dispatch(authSystemUserLoginAction({userLogingAuth:this.anyUserLoginAuth}));
      */
    }
  }

  get personFormControl() {
    return this.personForm.controls;
  }
}
