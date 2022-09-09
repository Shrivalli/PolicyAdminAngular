import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

import { ConsumerService } from '../consumer.service';
import { businessType } from '../Models/businessType';


import { consumer } from '../Models/Consumer';



@Component({
  selector: 'app-create-consumer',
  templateUrl: './create-consumer.component.html',
  styleUrls: ['./create-consumer.component.css']
})
export class CreateConsumerComponent implements OnInit {
  alluser: any;
  
  cb:any ={
   
  business_Overview:{id:1,name:"SoleProprietor"}
  


  }

  businessType:businessType[]=[]
  
 str:any;
  router: any;
  constructor(private con:ConsumerService) {
    
   }

  ngOnInit(): void {
    this.businessType=[{id:1,name:"SoleProprietor"},{id:2,name:"Partnership"},{id:3,name:"PrivateLimited"},{id:4,name:"Corporation"}];
  }

  successAlert(){
   return Swal.fire('Added Successfully');
  }

  failAlert(){
    return Swal.fire('Failed to add');
  }
 

  createCon(formObj){
    console.log(formObj)
   
    this.con.saveConsumer(formObj).subscribe(data=>{
      console.log("user added");
      this.successAlert()
     
     
    },error => {
      this.failAlert();
    }

    )}

      }
  
    
       
  


