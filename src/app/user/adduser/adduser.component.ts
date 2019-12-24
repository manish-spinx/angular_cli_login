import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
  registerForm: FormGroup;

  constructor( private formBuilder: FormBuilder,) { }

  ngOnInit() {

    this.registerForm = new FormGroup({
      emailAddress: new FormControl("", Validators.required),
      
    });
  }

  onSubmit()
  {
    //this.emailAddress
  }

}
