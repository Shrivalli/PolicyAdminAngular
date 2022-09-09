import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CreateConsumerComponent } from './create-consumer/create-consumer.component';
import { ViewAllUserComponent } from './view-allConsumer/view-all-user.component';
import { MenuComponent } from './menu/menu.component';
import { EditConsumerComponent } from './edit-consumer/edit-consumer.component';
import { AddBusinessComponent } from './add-business/add-business.component';
import { ViewBusinessComponent } from './view-business/view-business.component';
import { AddPropertyComponent } from './add-property/add-property.component';
import { ViewPropertyComponent } from './view-property/view-property.component'; 
import { LoginComponent } from './login/login.component';
import { CreatePolicyComponent } from './create-policy/create-policy.component';
import { IssuePolicyComponent } from './issue-policy/issue-policy.component';
import { ViewPolicyComponent } from './view-policy/view-policy.component';
import { HomeComponent } from './home/home.component';
import { PolicyComponent } from './policy/policy.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateConsumerComponent,
    ViewAllUserComponent,
    MenuComponent,
    EditConsumerComponent,
    AddBusinessComponent,
    ViewBusinessComponent,
    AddPropertyComponent,
    ViewPropertyComponent,
    LoginComponent,
    CreatePolicyComponent,
    IssuePolicyComponent,
    ViewPolicyComponent,
    HomeComponent,
    PolicyComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
