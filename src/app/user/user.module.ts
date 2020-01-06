import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
// routing Module
import { UserRoutingModule } from './user-routing.module';
// Core Module 
import { CoreModule } from '../core/core.module';
// component
import { ProfileComponent } from './profile/profile.component';
import { AdduserComponent } from './adduser/adduser.component';

//service
import { UserService } from './services/user.service';


@NgModule({
  declarations: [
    ProfileComponent, 
    AdduserComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CoreModule,
  ],
  providers: [
    UserService
  ],
})
export class UserModule { }
