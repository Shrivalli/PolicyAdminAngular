import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { ConsumerService } from '../consumer.service';
import { business } from '../Models/Business';
import { businessType } from '../Models/businessType';

@Component({
  selector: 'app-add-business',
  templateUrl: './add-business.component.html',
  styleUrls: ['./add-business.component.css']
})
export class AddBusinessComponent implements OnInit {
 
  cb:business={
  BusinessId:0,
  BusinessName:'',
  BusinessType:{id:1,name:"SoleProprietor"},
  TotalEmployees:0,
  ConsumerId:0
  }
  allUser:any;
  cId:any;
 businessType:businessType[]=[]
  constructor(private con:ConsumerService) { }

  ngOnInit(): void {
    this.businessType=[{id:1,name:"SoleProprietor"},{id:2,name:"Partnership"},{id:3,name:"PrivateLimited"},{id:4,name:"Corporation"}];

  }

  successAlert(){
    return Swal.fire('Added Successfully');
   }
 
   failAlert(){
     return Swal.fire('Failed to add');
   }

   ViewUsers(){
    this.con.getallConsumer().subscribe((response)=>{
      this.allUser=response
      console.log(this.allUser)
     this.cId =  this.allUser.ConsumerId;
     console.log(this.cId);
    })

  }
 
  createBus(form5:NgForm){
  //   this.con.addBusiness(formObj).subscribe((data)=>{
  //     console.log("Added Business")
  //     this.successAlert();
  //   })
  //     this.failAlert();

  // }
  //console.log(formObj)

    this.con.addBusiness(form5).subscribe(data=>{
      //console.log("Business Added");
      this.successAlert();
      form5.value.reset();
      
    },error => {
      this.failAlert();
    }

    )};

}
