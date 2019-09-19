import { Component, OnInit } from '@angular/core';
import{AuthService} from '../auth.service'
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  messages: any[] = [];
  subscription: Subscription;
  myData ={ }
   first_name: String;


  constructor(private _authService : AuthService, private dataService: DataService) {

    this.subscription = this.dataService.getMessage().subscribe(message => {
      if (message) {
      this.messages.push(message);
      console.log(message);
      
      this.first_name = message.text.first_name;
      console.log(this.first_name);

      } else {
      // clear messages when empty message received
      this.messages = [];
      }
      });


   }

  ngOnInit() {
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
