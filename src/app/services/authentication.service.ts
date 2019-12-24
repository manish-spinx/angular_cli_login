import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpParams } from '@angular/common/http';
import { environment } from "../../environments/environment";
import { Observable } from 'rxjs/Observable';
import axios from 'axios';
import 'rxjs/add/operator/map';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class AuthenticationService {
    // private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    // get isLoggedIn() {
    //     return this.loggedIn.asObservable();
    //   }

    constructor(
        private http: HttpClient,
        private router: Router,
        ) { }

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

           let api_url = 'http://localhost:3005/admin_api/login';
           //let api_url = 'https://projects.spinxweb.net/ncwm-spinx/api/admin/auth/login';

        return this.http.post(api_url,post_data)
            .map(user => {
                // login successful if there's a jwt token in the response
                if (user) {                                       
                    localStorage.setItem('id', user['data']['_id']);
                    localStorage.setItem('access_token', user['data']['access_token']);
                    localStorage.setItem('userData', JSON.stringify(user['data']));
                   // this.loggedIn.next(true);
                    //this.router.navigate(['/']);

                }
                return user;
            });
    }

    
}