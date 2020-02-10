import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

import { Router,ActivatedRoute  } from '@angular/router';

// user service
import { UserService } from '../services/user.service';

// model
import { User } from '../model/user';

// validaition helper
import { SpinxValidMatch } from 'src/app/_helpers/spinx-valid-match.validator';
import { SpinxValidNumeric } from 'src/app/_helpers/spinx-valid-numeric.validator';
import { SpinxValidAlphabet } from 'src/app/_helpers/spinx-valid-alphabet.validator';

import * as moment from 'moment';

@Component({
    selector: 'app-edituser',
    templateUrl: 'edituser.component.html'
})

export class EdituserComponent implements OnInit {

    //Below All variable add user form related  
    user_model = new User();
    registerForm: FormGroup;
    isSubmitted: boolean = false;
    submit_validaiton_flag: boolean = false;
    team:any;
    eduFormArray:string[]=[]; 
    team_dataFormArray:string[]=[]; 
    drop_down_list:any;
    custom_image_valdaiton:string="";
    image_valdaiton:boolean = false;
    public totalfiles: Array<File> =[];
    public totalfiles_name:any;
    temp_date = '2019-10-20';

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
        { id:'2',name: 'Us'},
        { id:'3',name: 'Russian' },
      ];
    
      public education_list = [
        { id:'1',name: 'B.E.IT'},
        { id:'2',name: 'MCA' },
        { id:'3',name: 'BCA' },
        { id:'4',name: 'Diploma'},
      ];

      public units = ['bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

      niceBytes(x){
        if(x === 1) return '1 byte';  
        let l = 0, n = parseInt(x, 10) || 0;  
        while(n >= 1024 && ++l){
            n = n/1024;
        }
    
         // + ' ' + this.units[l]
        return(n.toFixed(n < 10 && l > 0 ? 1 : 0) + ' ' + this.units[l]);
      }

    // edit form related variables


    constructor(private fb: FormBuilder,private _uservice:UserService,private router: Router,private route: ActivatedRoute) {
        this.registerForm = fb.group({
            mobile:["", Validators.required],
            company:["", Validators.required],      
            name:["", Validators.required],
            gender:["", Validators.required],
            address:[null],
            country:["", Validators.required],
            //team:[[],Validators.required],
            edu_data:[],
            team_data:[],
            user_profile_data:[],
            dateofjoin:'',
            //dateofjoin2:'',
            email:([Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
          },{
              validator: [
                           SpinxValidNumeric('mobile'),
                           SpinxValidAlphabet('company'),
                           //SpinxValidImage('imageInput',this.totalfiles),
                          ]
          });
     }

    async ngOnInit() { 

        await this._uservice.user_post('edit_user_angular',{user_id:this.route.snapshot.params.id})
        .subscribe(
          response => {

                console.log('---------- > user response ---- >');
                console.log(response);
                
                // profile_image: "1579152749098_SYZe9l0h06K1eCKQBYwwUxz4p.jpg"
                // profile_image_link: "http://localhost:3005/uploads/user/1579152749098_SYZe9l0h06K1eCKQBYwwUxz4p.jpg"
                // dateofjoin: "2020/01/23 00:00:00"
                
                console.log('-----------aa----------');
                console.log(response['data']['dateofjoin']);

                console.log('-----chk----date---default--');
                console.log(new Date());
                

                if(response['status']==="1")
                {
                    this.registerForm.patchValue({
                        email: response['data']['email'],
                        name: response['data']['name'],
                        mobile: response['data']['mobile'],
                        dateofjoin: new Date(response['data']['dateofjoin']),
                        //dateofjoin2: new Date(response['data']['dateofjoin']),
                        address: response['data']['address'],
                        company: response['data']['company_name'],
                        gender: response['data']['gender'],
                        country: response['data']['country'],
                        team_data:response['data']['team'],
                        edu_data:response['data']['edu_list']
                      });   

                     // Education List
                     this.education_list = this.education_list.map(function(val){ 
                      if(response['data']['edu_list'].indexOf(val.id) !== -1)
                      {
                        return {id:val.id,name:val.name,status:true};
                      }
                      else{
                        return {id:val.id,name:val.name,status:false};
                      }   
                    }) 

                    // Team List
                    this.team_list = this.team_list.map(function(val){ 
                      if(response['data']['team'].indexOf(val.id) !== -1)
                      {
                        return {id:val.id,name:val.name,status:true};
                      }
                      else{
                        return {id:val.id,name:val.name,status:false};
                      }   
                    }) 


                }
                else{
                    alert(response['message'].message);
                }  

                
                
          }, err => {
              
          });





    }

handleFileInput(e:any)
{

}

onChange_country_selection(index:any)
{
    console.log('--------simple----single-----dropdown--------');
}

onChange_team_selection(e:any)
{

}

get_checkbox_value(e:any)
{
    
}

onCancel()
{
    
}




}