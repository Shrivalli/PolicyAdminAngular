import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConsumerService {
url="https://pasconsumerservice.azurewebsites.net/api/Consumer";
  constructor(private http :HttpClient) { }

  
  saveConsumer(Consumer: FormData)
  {
    
     return this.http.post(this.url,Consumer);
  }

  getallConsumer(){
    return this.http.get("https://pasconsumerservice.azurewebsites.net/api/Consumer/AllConsumerDetails");
  }

  editUser(Consumer){
    return this.http.put("https://pasconsumerservice.azurewebsites.net/api/Consumer?id="+Consumer.ConsumerId,Consumer);
  }

  addBusiness(Business){
    return this.http.post("https://pasconsumerservice.azurewebsites.net/api/Consumer/create Business",Business);
  }

  getAllBusiness(){
    return this.http.get("https://pasconsumerservice.azurewebsites.net/api/Consumer/View All Businesses present");
  }

  addProperty(property){
    return this.http.post("https://pasconsumerservice.azurewebsites.net/api/Consumer/Create Business Property",property);
  }

  getallProperty(){
    return this.http.get("https://pasconsumerservice.azurewebsites.net/api/Consumer/AllPropertydetails")
  }
}

