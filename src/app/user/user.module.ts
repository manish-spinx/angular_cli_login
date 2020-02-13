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
import { EdituserComponent } from './edituser/edituser.component';

//service
import { UserService } from './services/user.service';
// Date Picker
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';

import {DpDatePickerModule} from 'ng2-date-picker';
import { NgDatepickerModule } from 'ng2-datepicker';

import {MatInputModule,MatDatepickerModule, MatNativeDateModule,MatFormFieldModule} from '@angular/material';

import { CKEditorModule } from 'ng2-ckeditor';

@NgModule({
  declarations: [
    ProfileComponent, 
    AdduserComponent,
    EdituserComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CoreModule,
    OwlDateTimeModule,
   OwlNativeDateTimeModule,
   DpDatePickerModule,
   NgDatepickerModule,
   MatInputModule,
   MatDatepickerModule,
   MatNativeDateModule,
   MatFormFieldModule,
   CKEditorModule,
  ],
  providers: [
    UserService
  ],
})
export class UserModule { }
