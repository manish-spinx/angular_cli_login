import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpParams } from '@angular/common/http';
import { environment } from "../../environments/environment";
import { Observable } from 'rxjs/Observable';
import axios from 'axios';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthenticationService {
    constructor(private http: HttpClient) { }

    async login_old(data_new)
    {
        await axios.post('https://projects.spinxweb.net/ncwm-spinx/api/admin/auth/login',data_new,
        {
            headers : {Accept: 'application/json','Content-Type': 'application/json'}
          }).then((response) => 
                {
                    console.log('check----response');
                    console.log(response);                                        
                })

    }

    login(post_data) {
            // {
            //     headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded'),
            // }

            let api_url = 'http://localhost:3005/admin_api/login';
           //let api_url = 'https://projects.spinxweb.net/ncwm-spinx/api/admin/auth/login';

            //const myheader = new HttpHeaders().set('Content-Type', 'application/json;charset=UTF-8')

            // let apiHeader = new HttpHeaders();
            // let contentType = apiHeader.append('Content-Type', 'application/json;charset=UTF-8');
            // let aControl = contentType.append('Access-Control-Allow-Origin', '*');
            // let pace = aControl.append('pace-useragent', 'rest');
            

        return this.http.post(api_url,post_data)
            .map(user => {
                // login successful if there's a jwt token in the response
                if (user) {                                       
                    localStorage.setItem('id', user['data']['_id']);
                    localStorage.setItem('access_token', user['data']['access_token']);
                    localStorage.setItem('userData', JSON.stringify(user['data']));
                }
                return user;
            });
    }
    
}