import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-found-something',
  templateUrl: './found-something.component.html'
})
export class FoundSomethingComponent implements OnInit {
  foundSomething;
  showSpinner;
  constructor(private toastr: ToastrService, private apiService: ApiService) {
    this.getFoundItem();
  }

  ngOnInit() {
  }

  getFoundItem() {
    this.showSpinner = true;
    this.apiService.getConfig('/api/v1/founditems/?format=json')
      .subscribe((data: any[]) => {
        this.showSpinner = false;
        if (data.length >= 0) {
          this.toastr.error('No Items');
        } else {
          this.foundSomething = data;
        }
      });
  }

}
