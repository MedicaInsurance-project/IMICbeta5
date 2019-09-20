import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import{AdminServiceService} from '../admin-service.service';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {

  constructor(private fb: FormBuilder, private _adminService :AdminServiceService
  , private routes :Router,private activateRouter : ActivatedRoute) { }
myData = [];

ngOnInit() {
this.activateRouter.params.subscribe(data=>{
// console.log(data.id)
this._adminService.view_User(data.id)
.subscribe(
(res:any) => this.myData = res,
error => console.error(error)
);
});



}

backToDash(){

  this.routes.navigate(['admin/customer-list']);}

}
