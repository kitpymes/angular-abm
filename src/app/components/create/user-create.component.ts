import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpUserService } from '../../services/http.user.service';
import { User } from '../../models/user.model';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent {
  user: User;

  constructor(
    public router: Router,
    public apiService: HttpUserService,
    private SpinnerService: NgxSpinnerService,
  ) {
    this.user = new User();
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
