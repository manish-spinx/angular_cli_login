import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  //isLoggedIn$: Observable<boolean>;
  loggedIn : boolean=false;

  constructor(private authService: AuthenticationService) { }

  ngOnInit() {
    // this.isLoggedIn$ = this.authService.isLoggedIn;

        if(localStorage.getItem('access_token')!=null)
        {
          this.loggedIn = true;
        }
        else{
          this.loggedIn = false;
        }

    //   console.log('------check----header-------function------');
    //   console.log(this.isLoggedIn$);
  }

  onLogout() {
    //this.authService.logout();
    localStorage.removeItem('id');
    localStorage.removeItem('access_token');
    localStorage.removeItem('userData');
    //this.router.navigate(['/']);
    window.location.href = '/login';
    return true;
   }

}
