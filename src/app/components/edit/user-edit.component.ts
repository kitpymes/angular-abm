import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpUserService } from '../../services/http.user.service';
import { Data} from '../../models';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UsertEditComponent implements OnInit {
  id: number;
  user: Data;

  constructor(
    public activatedRoute: ActivatedRoute,
    public router: Router,
    public apiService: HttpUserService,
    private SpinnerService: NgxSpinnerService,
    private toastr: ToastrService,
  ) {
    this.id = activatedRoute.snapshot.params.id;
  }

  ngOnInit() {
    this.SpinnerService.show();

    this.apiService.getById(this.id).subscribe(
      resp => this.user = resp.data,
      error => console.log(error),
      () => this.SpinnerService.hide()
    );
  }

  submit() {
    this.SpinnerService.show();

    this.apiService.update(this.user).subscribe(
      res => {
        console.log(res);
        this.toastr.success('Usuario actualizado correctamente');
        this.toastr.info('[ Abrir la consola para ver el status devuelto por la api ]');
        this.router.navigate(['list']);
      },
      err => this.toastr.error(err, 'ERROR'),
      () => this.SpinnerService.hide()
    );
  }
}
