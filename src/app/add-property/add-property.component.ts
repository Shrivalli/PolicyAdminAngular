import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { ConsumerService } from '../consumer.service';
import { property } from '../Models/property';
import { PropertyType } from '../Models/properType';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {

cb:property={
  PropertyId:0,
  BuildingAge :0,
  Buildingsqft :0,
  BuildingStoreys:0,
  CostOfProperty:0,
  UseFulLifeOfTheAsset :0,
  SalvageValue :0,
  PropertyType: {id:1,name:"PropertyInTransit"},
  PropertyValue:0,
  ConsumerId :0

}

propertyType:PropertyType[]=[]

  constructor(private con:ConsumerService) { }

  ngOnInit(): void {
    this.propertyType=[{id:1,name:"Building"},{id:2,name:"FactoryEquipment"},{id:3,name:"PropertyInTransit"}];
  }


  successAlert(){
    return Swal.fire('Added Successfully');
   }
 
   failAlert(){
     return Swal.fire('Failed to add');
   }

  createPro(formObj){
  //   this.con.addProperty(formObj).subscribe((data)=>{
  //     console.log("Added BusinessProperty")
  //     this.successAlert();
  //   })

  //   this.failAlert();
    

  // }
  console.log(formObj)

    this.con.addProperty(formObj).subscribe(data=>{
      console.log("Property Added");
      this.successAlert()
    },error => {
      this.failAlert();
    }

    )};

}
