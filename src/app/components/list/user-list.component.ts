import { Component, OnInit } from '@angular/core';
import { HttpUserService } from '../../services/http.user.service';
import { UserList } from '../../models';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
    $users: Observable<UserList>;

    constructor(
      private apiService: HttpUserService,
      private SpinnerService: NgxSpinnerService,
      private toastr: ToastrService,
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
      this.SpinnerService.show();

      this.apiService.delete(id).subscribe(
        res => {
          console.log(res);
          this.toastr.success('Usuario eliminado correctamente');
          this.toastr.info('[ Abrir la consola para ver el status devuelto por la api ]');
          this.getByPaged();
        },
        err => this.toastr.error(err, 'ERROR'),
        () => this.SpinnerService.hide()
      );
    }

    getByPaged(page: number = 1) {
      this.SpinnerService.show();
      setTimeout(() => {
        this.SpinnerService.hide();
      }, 1000);

      this.$users = this.apiService.getByPaged(page);
    }

    onChangePage(page: number) {
      this.getByPaged(page);
  }
}
