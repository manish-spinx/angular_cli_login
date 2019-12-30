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
  submit_validaiton_flag: boolean = false;

  public genders = [
    { id:'1',value: 'F', display: 'Female' },
    { id:'2',value: 'M', display: 'Male' }
  ];

  constructor( private fb: FormBuilder) {
    this.registerForm = fb.group({
      password: ["", Validators.required],
      cnfpassword: ["", Validators.required],
      mobile:["", Validators.required],
      company:["", Validators.required],      
      Name:["", Validators.required],
      gender:["", Validators.required],
      email:([Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
    },{
        validator: [
                     SpinxValidMatch('password', 'cnfpassword'),
                     SpinxValidNumeric('mobile'),
                     SpinxValidAlphabet('company')
                    ]
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

    if(this.registerForm.valid) 
    {
        console.log('form validaiton yes');
    }
    else{
      console.log('form validaiton no......');

      this.isSubmitted = false;
      this.submit_validaiton_flag=true;

      return;
      
    }


  }

  // get_data(value)
  // {
  //   console.log('aa' +value);

  // }


}
