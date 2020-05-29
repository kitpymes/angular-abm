import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpUserService } from '../../services/http.user.service';
import { Data} from '../../models';
import { NgxSpinnerService } from 'ngx-spinner';

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
  ) {
    this.id = activatedRoute.snapshot.params.id;
  }

  ngOnInit() {
    this.SpinnerService.show();

    console.log(this.id);

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
        console.log('UPDATE RESPONSE: ', res);
        this.router.navigate(['list']);
      },
      err => console.log(err),
      () => this.SpinnerService.hide()
    );
  }
}
