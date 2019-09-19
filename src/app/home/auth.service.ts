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

  private adminLogin = 'http://localhost:8080/admin/adminLogin'
  _url2 = 'http://localhost:8089/api/v1/user/userLogin';

 // tslint:disable-next-line:variable-name
 _url3 = 'http://localhost:8080/contactus/create';

 _verifyEmailURL = 'http://localhost:8080/agent/forgotPassword';

 
  constructor(private http: HttpClient) { }

  adminlogin(admin: adminLogin) {
    return this.http.post<any>(this.adminLogin, admin);
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

  userLoggedIn(){
    return !!localStorage.getItem('userToken');
  }
  getToken(){
    return localStorage.getItem('token');
  }
  verifyEmail(email){
    return this.http.post<any>(this._verifyEmailURL, email)
  }
}
