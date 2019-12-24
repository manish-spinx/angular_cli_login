import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
  registerForm: FormGroup;
  isSubmitted: boolean = false;
  emailAddress:any;
  Name:any;
  //data1: string = 'Sarathlal Saseendran';  
  //data2: string = '12345';  
  
  constructor( private fb: FormBuilder) {
    this.registerForm = fb.group({
      emailAddress: ["", Validators.required],
      Name:["", Validators.required],      
    });

   }

  ngOnInit() {

    
  }

  onSubmit()
  {
    this.isSubmitted = true;

    this.registerForm.patchValue({
      emailAddress: this.emailAddress,
      Name: this.Name
    });

    if(this.registerForm.valid) 
    {
        console.log('form validaiton yes');
    }
    else{
      console.log('form validaiton no......');
    }

  }

}
