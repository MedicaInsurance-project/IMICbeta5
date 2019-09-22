import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProfileComponent } from './profile/profile.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ViewUserComponent } from './view-user/view-user.component';
import { ViewAgentComponent } from './view-agent/view-agent.component';
import { ApprovedPolicyComponent } from './approved-policy/approved-policy.component';


@NgModule({
  declarations: [AdminComponent,
    HeaderComponent,
    FooterComponent,
    ProfileComponent,
    CustomerListComponent,
    DashboardComponent,
    SideNavComponent,
    ViewUserComponent,
    ViewAgentComponent,
    ApprovedPolicyComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
