import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Policy } from '../Models/Policy';
import { PolicyService } from '../policy.service';

export class IssuePolicyForm{
  policyid:number;
  paymentdetail:boolean;
}
@Component({
  selector: 'app-issue-policy',
  templateUrl: './issue-policy.component.html',
  styleUrls: ['./issue-policy.component.css']
})
export class IssuePolicyComponent implements OnInit {

  policy:Policy;
  policies: any;
  policyStatus:string = 'Policy Status is displayed here';
  issueForm:any;
  issuePolicyForm:IssuePolicyForm = new IssuePolicyForm();

  constructor(private policyservice:PolicyService) { }

  ngOnInit(): void {
    this.getPolicies();
  }
  getPolicies(){
    this.policyservice.getAllPolicies().subscribe(
      data => {
        this.policies = data;
      }
      // ,
      // err => {
      //   console.log(err);
      // }
    )
  }
  checkStatus(policyid:number): boolean{
    if(this.policyStatus=='Policy has been Issued for Policy ID '+ policyid)
    {
      return true;
    }
    return false;
  }
  //
issuePolicy(policyid:number, paymentdetails:boolean, issuePolicyForm:NgForm){
    const param = {policyid, paymentdetails};
    //issuePolicyForm.resetForm();
      this.policyservice.issuePolicy(policyid,paymentdetails).subscribe(
      data => {
        this.getPolicies();
        this.policyStatus = data;
      })
      // ,
      // err => {
      //   console.log(err);
       

  }
}
