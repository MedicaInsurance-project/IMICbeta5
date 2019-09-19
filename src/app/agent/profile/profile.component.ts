import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/home/auth.service';
import { AgentserviceService } from 'src/app/admin/agentservice.service';
import { DataService } from 'src/app/home/data.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
 

  messages: any[] = [];
  subscription: Subscription;
  myData ={ }
  first_name;
  last_name;
  email;
  phone;
  
  constructor( private _agentService: AgentserviceService, private dataService: DataService) {

    this.subscription = this.dataService.getMessage().subscribe(message => {
      if (message) {
      this.messages.push(message);
      console.log(message);
      console.log("Message",message.text.email);
      this.email = message.text.email;
      this.first_name = message.text.first_name;
      this.last_name = message.text.last_name;
      this.phone = message.text.phone;
  

      } else {
      // clear messages when empty message received
      this.messages = [];
      }
      });



   }
  

  ngOnInit() {
    // this._agentService.getAgentDetail()
    //   .subscribe(
    //     res => {
    //       this.myData = res.message
    //       console.log(this.myData);
    //     },
    //     error => console.error(error)
    //   );
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
