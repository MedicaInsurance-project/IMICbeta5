import { Component, OnInit } from '@angular/core';
import{AgentserviceService} from '../agentservice.service'

@Component({
  selector: 'app-appliers',
  templateUrl: './appliers.component.html',
  styleUrls: ['./appliers.component.css']
})
export class AppliersComponent implements OnInit {
myData: any = {};
  constructor(private _agentService: AgentserviceService) { }

  ngOnInit() {

    this._agentService.get_Contact()
    .subscribe(
      
      res => {this.myData = res
      console.log(res)},
      error => console.error(error)
        );
  
  }

  refreshUsersList() {
    this._agentService.get_Contact().subscribe((res) => {
      this.myData = res;

    });
  }

  deleteApplier(_id: string) {
    console.log(_id);
    this._agentService.delete_applier(_id)
      .subscribe(
        data => {
          console.log(_id)
          Array.prototype.slice.call(data, 1);
          this.refreshUsersList();
        },
        error => console.error("errorbv,jv" , error)
      );

  }




}
