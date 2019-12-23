import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  loggedIn :boolean = false;

  constructor( private router: Router,) { 
    if(localStorage.getItem('access_token')!=null)
    {
      console.log('ths app component calling..1');
      this.loggedIn = true;
    }
    else{
      console.log('ths app component calling..2');
      this.loggedIn = false;
    }
  }

  ngOnInit() {
  }

  user_profile()
  {
    this.router.navigate(['/user/profile']);
  }

  logout()
  {
      localStorage.removeItem('id');
      localStorage.removeItem('access_token');
      localStorage.removeItem('userData');
      this.router.navigate(['/']);
  }

}
