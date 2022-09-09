import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Policy } from './Models/Policy';

@Injectable({
  providedIn: 'root'
})
export class PolicyService {
url="https://paspolicyservice.azurewebsites.net//api/Policy";

 
  constructor(private http:HttpClient) { }

  
  getAllPolicies(): Observable<Policy[]> {  
    return this.http.get<Policy[]>(this.url + '/GetAllPolicies');
  }

  issuePolicy(id:number,payment:any):Observable<any>{
    console.log(id);
  
    return this.http.put<any>(this.url+'/IssuePolicy?policyId='+id+'&paymentDetails='+payment,null,
    {
      headers:new HttpHeaders({
        'Content-Type':'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Method':'*',
        'Authorization':'Bearer '+localStorage.getItem("jwt")
        
      })
    });
  }
  //https://localhost:44350/api/Policy/CreatePolicy?consumerid=100&propertyid=1001
  createPolicy(consumerId:number,propertyId:number):Observable<string>{
    let url = this.url+'/CreatePolicy?consumerid='+consumerId+'&propertyid='+ propertyId;
    return this.http.post<string>(url, {responseType:'text'}
    );
  }
}



