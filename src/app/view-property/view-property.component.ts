import { Component, OnInit } from '@angular/core';
import { ConsumerService } from '../consumer.service';

@Component({
  selector: 'app-view-property',
  templateUrl: './view-property.component.html',
  styleUrls: ['./view-property.component.css']
})
export class ViewPropertyComponent implements OnInit {
  allUser: any;

  constructor(private con:ConsumerService) { }

  ngOnInit(): void {
    this.ViewProperty();
  }
  ViewProperty(){
    this.con.getallProperty().subscribe((response)=>{
      this.allUser=response
      console.log(this.allUser)
    })

  }

}
