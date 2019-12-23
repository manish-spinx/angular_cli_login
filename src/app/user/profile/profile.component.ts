import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { GlobalapiService } from 'src/app/services/globalapi.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profileForm: FormGroup;
  isSubmitted: boolean = false;
  old_email_id:string;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private globalapiService: GlobalapiService,
    ) {
      this.profileForm = fb.group({
        fullname: ["", Validators.required],
        email: ["", Validators.required],
      });
    }

    public loading = false;

  async ngOnInit(){

     let api_url = 'http://localhost:3005/admin_api/edit_user';

     await this.globalapiService.past_data_to_server(api_url,{'user_id':localStorage.getItem("id")})
     .subscribe(
      response => {
          if(response['success']==1)
          {
            this.profileForm.patchValue({
              fullname: response['data']['name'],
              email: response['data']['email'],
            });

              this.old_email_id = response['data']['email'];
          }
      }, err => {
          
      });
    
  }

  user_profile()
  {
    this.router.navigate(['/user/profile']);
  }

  async profileFormSubmit()
  {

    this.isSubmitted = true;
    if(this.profileForm.valid) 
    {
       let api_url = 'http://localhost:3005/front_api/front_update_profile';

       const reqParams = {      
        email: this.profileForm.value.email,
        name: this.profileForm.value.fullname,
        o_email:this.old_email_id,
        user_id:localStorage.getItem("id")
       };

       await this.globalapiService.past_data_to_server(api_url,reqParams)
       .subscribe(
        response => {
            console.log('check response....');
            console.log(response);

            if(response['success']==1)
            {
              

            }
        }, err => {
            
        });
      


    }

  }


}
