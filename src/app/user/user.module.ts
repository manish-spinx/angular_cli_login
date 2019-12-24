import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';


import { UserRoutingModule } from './user-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { AdduserComponent } from './adduser/adduser.component';


@NgModule({
  declarations: [ProfileComponent, AdduserComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class UserModule { }
