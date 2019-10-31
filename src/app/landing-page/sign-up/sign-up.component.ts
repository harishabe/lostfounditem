import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../../api.service';

export interface OwnerForCreation {
  username: any;
  email: any;
  password: any;
}

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  showSpinner;
  public signUpForm: FormGroup;
  constructor(private apiService: ApiService, private toastr: ToastrService) { }

  ngOnInit() {
    this.signUpForm = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.maxLength(60)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.maxLength(100)])
    });
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.signUpForm.controls[controlName].hasError(errorName);
  }

  public createOwner = (ownerFormValue) => {
    if (this.signUpForm.valid) {
      this.executeOwnerCreation(ownerFormValue);
    }
  }

  private executeOwnerCreation = (ownerFormValue) => {
    this.showSpinner = true;
    const signUpObj: OwnerForCreation = {
      username: ownerFormValue.username,
      email: ownerFormValue.email,
      password: ownerFormValue.password
    };
    const signobj = { 'user': signUpObj };
    this.apiService.postData('/api/users/register/?format=json', signobj)
      .subscribe((data: any[]) => {
        this.successResponse(data);
      }, (err) => {
        this.failureResponse(err);
      });
  }

  successResponse(response) {
    console.log('response', response);
    this.showSpinner = false;
    this.toastr.success('Successfully Logged In');
    this.toastr.success('Successfully registered!');
  }

  failureResponse(err) {
    this.showSpinner = false;
    this.toastr.error(err.error.errors.email[0] , err.error.errors.username[0]);
  }

}
