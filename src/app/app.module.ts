import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpUserService } from './services/http.user.service';
import { UserCreateComponent, UserListComponent, UsertEditComponent, PaginationComponent } from './components';

@NgModule({
  declarations: [
    AppComponent,
    PaginationComponent,
    UserCreateComponent,
    UserListComponent,
    UsertEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [HttpUserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
