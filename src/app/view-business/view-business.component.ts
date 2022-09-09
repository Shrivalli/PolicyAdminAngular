import { Component, OnInit } from '@angular/core';
import { ConsumerService } from '../consumer.service';

@Component({
  selector: 'app-view-business',
  templateUrl: './view-business.component.html',
  styleUrls: ['./view-business.component.css']
})
export class ViewBusinessComponent implements OnInit {
allUser:any;
  constructor(private con:ConsumerService) { }

  ngOnInit(): void {
    this.view();
  }

  view(){
    this.con.getAllBusiness().subscribe((response)=>{
      this.allUser=response
      console.log(this.allUser)
  })
}

}