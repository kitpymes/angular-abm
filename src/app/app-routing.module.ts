import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserCreateComponent } from './components/create/user-create.component';
import { UsertEditComponent } from './components/edit/user-edit.component';
import { UserListComponent } from './components/list/user-list.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'list' },
  { path: 'create', component: UserCreateComponent },
  { path: 'edit/:id', component: UsertEditComponent},
  { path: 'list', component: UserListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
