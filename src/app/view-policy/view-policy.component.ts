import { Component, OnInit } from '@angular/core';
import { Policy } from '../Models/Policy';
import { PolicyService } from '../policy.service';

@Component({
  selector: 'app-view-policy',
  templateUrl: './view-policy.component.html',
  styleUrls: ['./view-policy.component.css']
})
export class ViewPolicyComponent implements OnInit {

  allpolicy:any=[];
  constructor(private policyservice:PolicyService) { 
  }

  ngOnInit(): void {
    this.ViewPolicies();
  }

  ViewPolicies(){
    this.policyservice.getAllPolicies().subscribe((response)=>{
      this.allpolicy=response
      console.log(this.allpolicy)
    })
  }
}