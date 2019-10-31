import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../../api.service';
import { ApiEndPoints } from '../../apiEndPoint';

@Component({
  selector: 'app-lost-something',
  templateUrl: './lost-something.component.html'
})
export class LostSomethingComponent implements OnInit {
  contents;
  showSpinner;
  constructor(private toastr: ToastrService, public apiService: ApiService) {
    this.getLostItem();
  }

  ngOnInit() {
  }
  getLostItem() {
    this.showSpinner = true;
    this.apiService.getConfig('/api/v1/lostitems/?format=json')
      .subscribe((data: any[]) => {
        this.showSpinner = false;
        this.contents = data;
      });
  }

}
