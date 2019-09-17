import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { register } from './customer-registration/register';

@Injectable({
  providedIn: 'root'
})
export class AgentserviceService {
  _url = 'http://localhost:8080/users/save';

  _urlgetall = 'http://localhost:8080/users'

  getAgent = `http://localhost:8080/agent/viewAgent`

  constructor(private http: HttpClient) { }

  registeration(reg: register) {
    return this.http.post<any>(this._url, reg);
  }

  get_Users() {
    return this.http.get(this._urlgetall);
  }

  getAgentDetail(){
    return this.http.get<any>(this.getAgent);
  }
}