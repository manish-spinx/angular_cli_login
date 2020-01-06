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
          console.log('checked user----> service : ');
          console.log(user);

        //return this.http.post('http://aaaa.ggfsd. com',user);
    }
    


// past_data_to_server(api_name, params_data)  
// {  
//         return this.customHttp.post(api_name, params_data)
//         .map(resp => {
//             return resp;
//         })

// }    

}