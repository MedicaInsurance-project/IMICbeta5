import { Component, OnInit } from '@angular/core';
import { AgentserviceService } from '../agentservice.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {

  constructor(private _agentService: AgentserviceService, private routes :Router,private activateRouter : ActivatedRoute) { }
myData = [];

ngOnInit() {
this.activateRouter.params.subscribe(data=>{
// console.log(data.id)
this._agentService.view_User(data.id)
.subscribe(
(res:any) => this.myData = res,
error => console.error(error)
);
});



}
back(){
  this.routes.navigate(['agent/customer-list']);
}


}
