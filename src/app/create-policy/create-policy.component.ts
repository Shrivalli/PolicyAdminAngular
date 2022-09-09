import { Component, OnInit } from '@angular/core';
import { PolicyService } from '../policy.service';

export class CreatePolicy{
  consumerid:number;
  propertyid:number;
}

@Component({
  selector: 'app-create-policy',
  templateUrl: './create-policy.component.html',
  styleUrls: ['./create-policy.component.css']
})

export class CreatePolicyComponent implements OnInit {
  
  createPolicyForm:CreatePolicy = new CreatePolicy();
  policyStatus:string = 'Policy Status is displayed here';
  msg:string="";
  constructor(private policyservice:PolicyService) { }

  ngOnInit(): void {
  }
  
  checkPolicyStatus(myPolicyStatus:string):boolean{
    return myPolicyStatus === "Policy has been created with Policy Status \'Initiated\'.";
  
  }
  createPolicy(formObj)
{
  this.policyservice.createPolicy(formObj.consumerid,formObj.propertyid).subscribe(data=>{
          this.policyStatus = data;
          this.msg = this.policyStatus;
          alert("PolicyCreated")
          // console.log("PolicyCreated");
          //policyform.resetForm();
  });
}  // createPolicy(consumerid:number, propertyid:number, policyform:NgForm){  //param : {
  //   this.createPolicy(consumerid,propertyid).subscribe(
  //     data => {
  //       //this.getPolicies();
  //       //this.getProperties();
  //       this.policyStatus = data;
  //       this.msg = this.policyStatus;
  //       alert("PolicyCreated")
  //       console.log("PolicyCreated");
  //       policyform.resetForm();
  //     },
  //     err => {
  //       console.log(err);
  //     }
  //   )};
}
