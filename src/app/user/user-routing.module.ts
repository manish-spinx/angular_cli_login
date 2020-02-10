import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { AdduserComponent } from './adduser/adduser.component';
import { EdituserComponent } from './edituser/edituser.component';
import { AuthGuard } from '../services/authGuard';

const routes: Routes = [
  {
    //canActivate: [AuthGuard],
    path: 'user',children: [
      { path: 'profile', component: ProfileComponent},
      { path: 'add', component: AdduserComponent},
      { path: 'edit/:id', component: EdituserComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
