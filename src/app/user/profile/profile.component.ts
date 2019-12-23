import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profileForm: FormGroup;
  isSubmitted: boolean = false;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    ) {
      this.profileForm = fb.group({
        fullname: ["", Validators.required],
        email: ["", Validators.required],
      });
    }

    public loading = false;

  ngOnInit(){

    
    
  }

  user_profile()
  {
    this.router.navigate(['/user/profile']);
  }

  profileFormSubmit()
  {

  }


}
