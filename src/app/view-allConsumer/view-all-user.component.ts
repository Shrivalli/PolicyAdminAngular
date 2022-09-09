import { Component, OnInit } from '@angular/core';
import { ConsumerService } from '../consumer.service';
import { CreateConsumerComponent } from '../create-consumer/create-consumer.component';


@Component({
  selector: 'app-view-all-user',
  templateUrl: './view-all-user.component.html',
  styleUrls: ['./view-all-user.component.css']
})
export class ViewAllUserComponent implements OnInit {
  allUser: any;
  

  constructor(private con:ConsumerService) { }

  ngOnInit(): void {
    this.ViewUsers();
  }

  ViewUsers(){
    this.con.getallConsumer().subscribe((response)=>{
      this.allUser=response
      console.log(this.allUser)
      this.allUser.businessOverview="Sole Propreitor" 
          })

  }
 

}
