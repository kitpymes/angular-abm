import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpUserService } from '../../services/http.user.service';
import { User, Data } from '../../models/user.model';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

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
    private toastr: ToastrService,
  ) {
    this.user = new Data();
   }

   submit() {
    this.SpinnerService.show();

    this.apiService.create(this.user).subscribe(
      res => {
        console.log(res);
        this.toastr.success('Usuario creado correctamente');
        this.toastr.info('[ Abrir la consola para ver el status devuelto por la api ]');
        this.router.navigate(['list']);
      },
      err => this.toastr.error(err, 'ERROR'),
      () => this.SpinnerService.hide()
    );
  }
}
