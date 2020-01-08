import { Component, OnInit } from '@angular/core';
import { HttpUserService } from '../../services/http.user.service';
import { List, User } from '../../models';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
    $users: Observable<List[]>;

    constructor(
      private apiService: HttpUserService,
      private router: Router
    ) {}

    ngOnInit() {
      this.getByPaged();
    }

    create() {
      this.router.navigate(['create']);
    }

    edit(id: number) {
      this.router.navigate(['edit', id]);
    }

    delete(id: number) {
      this.apiService.delete(id).subscribe(
        resp => this.getByPaged(),
        error => console.log(error)
      );
    }

    getByPaged(page: number = 1) {
      this.$users = this.apiService.getByPaged(page);
    }

    onChangePage(page: number) {
      this.getByPaged(page);
  }
}
