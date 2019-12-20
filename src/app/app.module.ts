import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HttpClient} from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';

//auth guard
import { AuthGuard } from './services/authGuard';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,    
    HttpClientModule,

  ],
  providers: [
    HttpClient,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
