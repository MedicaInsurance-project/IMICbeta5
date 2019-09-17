import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgentRoutingModule } from './agent-routing.module';
import { AgentComponent } from './agent.component';
import{CustomerListComponent} from './customer-list/customer-list.component';
import{CustomerRegistrationComponent} from './customer-registration/customer-registration.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {FooterComponent} from './footer/footer.component';
import {HeaderComponent} from './header/header.component';
import{ProfileComponent} from './profile/profile.component';
import{SideNavComponent} from './side-nav/side-nav.component';
import { fromEventPattern } from 'rxjs';
import { ReactiveFormsModule } from '@angular/forms';
import { ViewUserComponent } from './view-user/view-user.component';


@NgModule({
  declarations: [AgentComponent,
    CustomerListComponent,
    CustomerRegistrationComponent,
    DashboardComponent,
    FooterComponent,
    HeaderComponent,
    ProfileComponent,
    SideNavComponent,
    ViewUserComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AgentRoutingModule
  ]
})
export class AgentModule { }
