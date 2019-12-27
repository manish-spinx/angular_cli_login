import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { SpinxValidMatch } from 'src/app/_helpers/spinx-valid-match.validator';
import { SpinxValidNumeric } from 'src/app/_helpers/spinx-valid-numeric.validator';
import { SpinxValidAlphabet } from 'src/app/_helpers/spinx-valid-alphabet.validator';


@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
  registerForm: FormGroup;
  isSubmitted: boolean = false;

  //spinx_valid_alphabet.validator.ts
  
  constructor( private fb: FormBuilder) {
    this.registerForm = fb.group({
      password: ["", Validators.required],
      cnfpassword: ["", Validators.required],
      mobile:["", Validators.required],
      company:["", Validators.required],
      //mobile:([Validators.required,MustNumeric('mobile')]),
      Name:["", Validators.required],
      email:([Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
    },{
        validator: [SpinxValidMatch('password', 'cnfpassword'),SpinxValidNumeric('mobile'),SpinxValidAlphabet('company')]
        //validator: MustNumeric('mobile'),
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
