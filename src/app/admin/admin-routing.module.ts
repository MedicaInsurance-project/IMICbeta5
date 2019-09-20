import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { ProfileComponent } from './profile/profile.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ViewUserComponent } from '../admin/view-user/view-user.component';


const routes: Routes = [
  {
    path: '', component: AdminComponent,
    children: [
      // {
      // path : '' , redirectTo: 'dashboard' , pathMatch : 'full'
      // },
      { path: 'dashboard' , component: DashboardComponent },
      { path: 'profile' , component: ProfileComponent },
      { path: 'customer-list' , component: CustomerListComponent },
      { path: 'customer-list/view-user/:id' , component: ViewUserComponent },

   
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
