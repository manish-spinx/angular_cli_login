import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthModule } from './auth/auth.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './services/authGuard';


const routes: Routes = [
  { path: '',loadChildren: () => import(`./auth/auth.module`).then(m => m.AuthModule) }, 
  { 
    path: 'dashboard',
    component:DashboardComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],//,{ enableTracing: false }
  exports: [RouterModule]
})
export class AppRoutingModule { }
