import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpUserService } from '../../services/http.user.service';
import { User, Data } from '../../models/user.model';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent {
  user: Data;

  constructor(
    public router: Router,
    public apiService: HttpUserService,
    private SpinnerService: NgxSpinnerService,
  ) {
    this.user = new Data();
   }

   submit() {
    this.SpinnerService.show();

    this.apiService.create(this.user).subscribe(
      res => {
        console.log('CREATE RESPONSE: ', res);
        this.router.navigate(['list']);
      },
      err => console.log(err),
      () => this.SpinnerService.hide()
    );
  }
}
