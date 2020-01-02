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
  team:any;
  eduFormArray:string[]=[]; 

  drop_down_list:any;
  
  public genders = [
    { id:'1',value: 'F', display: 'Female'},
    { id:'2',value: 'M', display: 'Male' }
  ];

  public country_list = [
    { id:'1',name: 'India'},
    { id:'2',name: 'Us' },
    { id:'3',name: 'Russian' },
  ];

  public team_list = [
    { id:'1',name: 'India'},
    { id:'2',name: 'Us' },
    { id:'3',name: 'Russian' },
  ];


  public education_list = [
    { id:'1',name: 'B.E.IT'},
    { id:'2',name: 'MCA' },
    { id:'3',name: 'BCA' },
    { id:'4',name: 'Diploma' },
  ];

  

  constructor( private fb: FormBuilder) {
    this.registerForm = fb.group({
      password: ["", Validators.required],
      cnfpassword: ["", Validators.required],
      mobile:["", Validators.required],
      company:["", Validators.required],      
      Name:["", Validators.required],
      gender:["", Validators.required],
      address:[null],
      country:["", Validators.required],
      team:[[],Validators.required],
      edu_data:[],
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

  onChange_team_selection(e:any)
  {

     console.log(e);

    //   var options = e.target.options;

    // var value = [];
    // for (var i = 0, l = options.length; i < l; i++) {
    //   if (options[i].selected) {
    //     value.push(options[i].value);
    //   }
    // }
    
    // console.log('----------value--------');
    // console.log(value);

  }

  get_checkbox_value(e:any)
  {
        if(e.target.checked)
        {
          this.eduFormArray.push(e.target.id);
        }
        else{
          let index = this.eduFormArray.indexOf(e.target.id);
          if (index !== -1) {
              this.eduFormArray.splice(index, 1);
          }
        }
        console.log(this.eduFormArray);
  }

  onCancel()
  {
     alert('Need to Redirect Listing Page !');
  }

  onSubmit()
  {
    this.isSubmitted = true;

    // this.registerForm.patchValue({
    //   emailAddress: this.emailAddress,
    //   Name: this.Name
    // });

    console.log('need to check record....');

    console.log(this.registerForm.value.country);


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
