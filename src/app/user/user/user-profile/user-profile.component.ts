import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/home/data.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  messages: any[] = [];
  subscription: Subscription;

  address;
  adhar;
  email;
  firstname;
  lastname;
  nominie;
  phone;
  policy;
  relation
  title;

  constructor( private dataService: DataService) { 

    this.subscription = this.dataService.getMessage().subscribe(message => {
      if (message) {
      this.messages.push(message);
      this.firstname = message.text.firstname;
      this.lastname = message.text.lastname;
      this.address = message.text.address;
      this.adhar = message.text.adhar;
      this.nominie = message.text.nominie;
      this.phone = message.text.phone;
      this.policy = message.text.policy;
      this.relation = message.text.relation;
      this.email = message.text.email;
      this.title = message.text.title;
      



      } else {
      // clear messages when empty message received
      this.messages = [];
      }
      });
  }

  ngOnInit() {
  }

}
