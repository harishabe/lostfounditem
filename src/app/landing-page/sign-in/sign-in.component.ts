import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../../api.service';

export interface SignIn {
  email: any;
  password: any;
}

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  public signInForm: FormGroup;
  showSpinner;
  constructor(private router: Router, private apiService: ApiService, private toastr: ToastrService) { }

  ngOnInit() {
    this.signInForm = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.maxLength(60)]),
      password: new FormControl('', [Validators.required, Validators.maxLength(100)])
    });
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.signInForm.controls[controlName].hasError(errorName);
  }

  public createSignIn = (ownerFormValue) => {
    if (this.signInForm.valid) {
      this.executeSignInrCreation(ownerFormValue);
    }
  }

  private executeSignInrCreation = (ownerFormValue) => {
    this.showSpinner = true;
    const signIn: SignIn = {
      email: ownerFormValue.username,
      password: ownerFormValue.password
    };
    const signInObj = { "user": signIn };
    this.apiService.postData('/api/users/login/?format=json', signInObj)
      .subscribe((data: any[]) => {
        this.successResponse();
      }, (err) => {
        this.failureResponse(err);
      });
  }

  successResponse() {
    this.showSpinner = true;
    localStorage.loggedIn = true;
    this.toastr.success('Successfully Logged In');
    this.router.navigateByUrl('/dashboard');
  }

  failureResponse(err) {
    this.showSpinner = false;
    this.toastr.error(err.error.errors.error[0]);
  }

}
