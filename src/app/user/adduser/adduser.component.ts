import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { MustMatch } from 'src/app/_helpers/must-match.validator';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
  registerForm: FormGroup;
  isSubmitted: boolean = false;
  
  //data1: string = 'Sarathlal Saseendran';  
  //data2: string = '12345';  
  
  constructor( private fb: FormBuilder) {
    this.registerForm = fb.group({
      password: ["", Validators.required],
      cnfpassword: ["", Validators.required],
      Name:["", Validators.required],
      email:([Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
    },{
        validator: MustMatch('password', 'cnfpassword')
    });

   }

  ngOnInit() {

    
  }

  onSubmit()
  {
    this.isSubmitted = true;

    // this.registerForm.patchValue({
    //   emailAddress: this.emailAddress,
    //   Name: this.Name
    // });

     console.log('need to check record....');
     console.log(this.registerForm);

    if(this.registerForm.valid) 
    {
        console.log('form validaiton yes');
    }
    else{
      console.log('form validaiton no......');
      
    }


  }

  get_data(value)
  {
    console.log('aa' +value);

  }


}
