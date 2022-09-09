import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { ConsumerService } from '../consumer.service';
import { businessType } from '../Models/businessType';
import { consumer } from '../Models/Consumer';

@Component({
  selector: 'app-edit-consumer',
  templateUrl: './edit-consumer.component.html',
  styleUrls: ['./edit-consumer.component.css']
})
export class EditConsumerComponent implements OnInit {
  status:string='';
  cb:consumer ={
    ConsumerId: 0,
  Name:'',
  Pancard:'',
  DOB:'',
  Email:'',
  business_Overview:{id:1,name:"SoleProprietor"},
   no_of_employees:0,
    annual_turnover:0 ,
   capitalInvested:0,
   BusinessValue :0,
  AgentId:0


  }
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
Edit(formObj){
//   this.con.editUser(formObj).subscribe(data=>{
//     console.log("user edited");
//     this.status="Consumer Data Updated"
//   })

//   this.status="Check ID and try Again"
// }
this.con.editUser(formObj).subscribe(data=>{
  console.log("user added");
  this.successAlert()

},error => {
  this.failAlert();
}

)}


}
