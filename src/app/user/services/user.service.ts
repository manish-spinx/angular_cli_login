import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//import { environment } from "../../environments/environment";
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import { CustomHttp } from 'src/app/services/custom-http';

//model
import { User } from '../model/user';


@Injectable()
export class UserService {

    api_name = 'http://localhost:3005/admin_api/';
    constructor(private http: HttpClient,private customHttp: CustomHttp) { }


    user_post(api_slug,data)
    {
          //post data
          return this.customHttp.post(this.api_name+api_slug,data)
            .map(resp => {
                return resp;
            })
    }

    user_post_image(user)
    {
          //post_image
          return this.customHttp.post_image(this.api_name+'add_user_angular', user,'jpg')
            .map(resp => {
                return resp;
            })
    }

    user_post_service(user:User)
    {
          return this.customHttp.post_image(this.api_name+'add_user_angular', user,'jpg')
            .map(resp => {
                return resp;
            })
    }
    

}