import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/home/data.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-policy',
  templateUrl: './policy.component.html',
  styleUrls: ['./policy.component.css']
})
export class PolicyComponent implements OnInit {

  messages: any[] = [];
  subscription: Subscription;
  myData ={ }
  policy=[];
  policyName;
  policyAmount;
  policyPremium;
  constructor(private dataService: DataService) { 
    // debugger;

    this.dataService.sendMessage(localStorage.getItem('userdata'));
    this.subscription = this.dataService.getMessage().subscribe(message => {
      if (message) {
        this.myData=JSON.parse(message.text)
      this.messages.push(message);

      console.log("tktyf",message);
      console.log("Message",message);
      this.policy = this.myData['policy'];
         this.policyName=this.policy['policyName'];
         this.policyAmount=this.policy['policyAmount'];
         this.policyPremium=this.policy['premium'];


         console.log(this.policyName);
      // console.log(this.myData['policy['policyName']']);
  }
 else {
  // clear messages when empty message received
  this.messages = [];
  }
  });
}

  ngOnInit() {
  }

}
