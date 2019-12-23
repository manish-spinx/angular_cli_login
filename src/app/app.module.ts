import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HttpClient} from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';



//service
import { AuthGuard } from './services/authGuard'; //auth guard
import { GlobalapiService } from './services/globalapi.service';

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
    AuthGuard,
    GlobalapiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
