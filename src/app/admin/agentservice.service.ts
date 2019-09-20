import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AgentserviceService {
  _url = 'http://localhost:8080/users/save';

  _urlgetall = 'http://localhost:8080/users'

  getAgent = `http://localhost:8080/agent/viewAgent`

  constructor(private http: HttpClient) { }

 

  get_Users() {
    return this.http.get(this._urlgetall);
  }

  getAgentDetail(){
    return this.http.get<any>(this.getAgent);
  }
}