import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Policy } from '../Models/Policy';
import { PolicyService } from '../policy.service';

@Component({
  selector: 'app-policy',
  templateUrl: './policy.component.html',
  styleUrls: ['./policy.component.css']
})
export class PolicyComponent implements OnInit {

  consumerpolicies:any;
  flag_get_consumerpolicies:boolean=false;
  flag_insert_msg:boolean=false;
  flag_update_msg:boolean=false;
  create_msg:string="";
  update_msg:string="";
  flag_post:boolean=false;
  flag_put:boolean=false;
  propertyId:number;
  consumerId:number;
  policyId:number;
  // paymentstatus:boolean=false;
  paymentdetails:boolean;
  issue

  constructor(private policyservice:PolicyService) { }

  ngOnInit(): void {
  }

  get_api_consumerpolicies()
  {
    this.policyservice.getAllPolicies().subscribe(data=>{
      this.consumerpolicies=data;
      this.flag_get_consumerpolicies=true;
      this.flag_insert_msg=false;
      this.flag_update_msg=false;
      this.flag_post=false;
      this.flag_put=false;
      console.log(this.consumerpolicies);
    });
  }

  post_api(consumerId:number,propertyId:number,policyForm:NgForm):any
  {
    this.policyservice.createPolicy(consumerId,propertyId).subscribe(usdata=>{
    // this.create_msg="Policy has been Initiated!!!";
    this.create_msg = usdata;
    this.flag_insert_msg=true;
    this.flag_update_msg=false;
    this.flag_get_consumerpolicies=false;
    this.flag_post=false;
    this.flag_put=false;
    //Logging the response received from web api.
    console.log(usdata);
    policyForm.reset();
    })
  }

  put_api(policyId:number,paymentdetails:boolean,issuePolicyForm:NgForm)
  {
    //const param = {policyId,paymentdetails};
    this.policyservice.issuePolicy(policyId,paymentdetails).subscribe(data=>{
    //this.update_msg="Policy has been Issued to the id "+policyId;
    this.update_msg=data;
    this.flag_insert_msg=false;
    this.flag_update_msg=true;
    this.flag_get_consumerpolicies=false;
    this.flag_post=false;
    this.flag_put=false;
    console.log(data);
    issuePolicyForm.reset();
    })
  }

  post_api_create_policy(){
    this.flag_get_consumerpolicies=false;
    this.flag_insert_msg=false;
    this.flag_update_msg=false;
    this.flag_post=true;
    this.flag_put=false;
  }

  put_api_update_policy(){
    this.flag_get_consumerpolicies=false;
    this.flag_insert_msg=false;
    this.flag_update_msg=false;
    this.flag_post=false;
    this.flag_put=true;
  }

  getUrl()
{
  return "url('https://www.thechef.marketing/images/easyblog_articles/21/caso-practico-marketing-online-correduria-seguros.jpg')";
}
}
