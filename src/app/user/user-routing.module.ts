import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { AdduserComponent } from './adduser/adduser.component';

const routes: Routes = [
  {
    path: 'user', children: [
      { path: 'profile', component: ProfileComponent},
      { path: 'add', component: AdduserComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
