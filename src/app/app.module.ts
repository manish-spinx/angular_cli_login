import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HttpClient} from '@angular/common/http';

//service
import { AuthGuard } from './services/authGuard'; //auth guard
import { GlobalapiService } from './services/globalapi.service';
import { AuthenticationService } from './services/authentication.service';



import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  ToastrModule,
  ToastNoAnimation,
  ToastNoAnimationModule
} from 'ngx-toastr';

// component
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,    
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
  ],
  providers: [
    HttpClient,
    AuthGuard,
    GlobalapiService,
    AuthenticationService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
