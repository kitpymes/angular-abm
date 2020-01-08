import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpUserService } from '../../services/http.user.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent {
  user: User;

  constructor(
    public router: Router,
    public apiService: HttpUserService
  ) {
    this.user = new User();
   }

   submit() {
    this.apiService.create(this.user).subscribe(
      resp => this.router.navigate(['list']),
      error => console.log(error)
    );
  }
}
