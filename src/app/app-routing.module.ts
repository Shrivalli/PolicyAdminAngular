import { HomeComponent } from './home/home.component';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBusinessComponent } from './add-business/add-business.component';
import { AddPropertyComponent } from './add-property/add-property.component';
import { CreateConsumerComponent } from './create-consumer/create-consumer.component';
import { CreatePolicyComponent } from './create-policy/create-policy.component';
import { EditConsumerComponent } from './edit-consumer/edit-consumer.component';
import { IssuePolicyComponent } from './issue-policy/issue-policy.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { ViewAllUserComponent } from './view-allConsumer/view-all-user.component';
import { ViewBusinessComponent } from './view-business/view-business.component';
import { ViewPolicyComponent } from './view-policy/view-policy.component';
import { ViewPropertyComponent } from './view-property/view-property.component';
import { PolicyComponent } from './policy/policy.component';
import { AuthGuard } from './auth/auth.guard';


const routes: Routes = [
  {path:'createConsumer',canActivate:[AuthGuard],component:CreateConsumerComponent},
  {path:'ViewAllConsumer',canActivate:[AuthGuard],component:ViewAllUserComponent},
  {path:'EditConsumer',canActivate:[AuthGuard],component:EditConsumerComponent},
  {path:'CreateBusiness',canActivate:[AuthGuard],component:AddBusinessComponent},
  {path:'ViewBusiness',canActivate:[AuthGuard],component:ViewBusinessComponent},
  {path:'CreateProperty',canActivate:[AuthGuard],component:AddPropertyComponent},
  {path:'ViewProperty',canActivate:[AuthGuard],component:ViewPropertyComponent},
  {path:'Login',component:LoginComponent},
  // {path:'ViewPolicy',canActivate:[AuthGuard],component:ViewPolicyComponent},
  // {path:'CreatePolicy',canActivate:[AuthGuard],component:CreatePolicyComponent},
  // {path:'IssuePolicy',canActivate:[AuthGuard],component:IssuePolicyComponent},
  {path:'menu',canActivate:[AuthGuard],component:MenuComponent},
  {path:'home',canActivate:[AuthGuard],component:HomeComponent},
  {path:'Policy',canActivate:[AuthGuard],component:PolicyComponent},
  { path: '', redirectTo: 'Login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
