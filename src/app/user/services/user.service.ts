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
    constructor(private http: HttpClient,private customHttp: CustomHttp) { }

    user_post(user: User)
    {
          console.log(' Now user service api calling..');
          console.log(user);
    }
    

}