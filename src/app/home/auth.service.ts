import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {adminLogin} from './admin-login/admin';
import {UserLogin} from './user-login/user';
import {Contact} from './contact-us/contact';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // tslint:disable-next-line:variable-name
  private _url1 = 'http://localhost:8080/agent/agentLogin';
  // tslint:disable-next-line:variable-name
  _url2 = 'http://localhost:8089/api/v1/user/userLogin';

  private adminLoginURL = 'http://localhost:8080/admin/adminLogin'

 // tslint:disable-next-line:variable-name
 _url3 = 'http://localhost:8080/contactus/create';

 _verifyEmailURL = 'http://localhost:8080/agent/forgotPassword';
  constructor(private http: HttpClient) { }

  adminlogin(admin: adminLogin) {
    return this.http.post<any>(this.adminLoginURL, admin);
  }
  userlogin(user: UserLogin) {
    return this.http.post<any>(this._url2, user);
  }

  contactlogin(contact: Contact) {
    return this.http.post<any>(this._url3, contact);
  }

  agentlogin(agent){
    return this.http.post<any>(this._url1, agent);
  }

  agentLoggedIn(){
    return !!localStorage.getItem('token');
  }

  getToken(){
    return localStorage.getItem('token');
  }
  verifyEmail(email){
    return this.http.post<any>(this._verifyEmailURL, email)
  }
}
