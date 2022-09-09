import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
//   //readonly apiUrl = "https://localhost:44396/swagger/index.html";
 
//   // loggedIn:boolean=false;
//   constructor(private http:HttpClient) { }
  

//   // login(data):Observable<any>
//   // {
//   //   return this.http.post<any>('https://localhost:44396/Authentication',data);
    
//   //   this.loggedIn=true;
//   // }
//   // logout():void{
//   //   this.loggedIn=false;
//   // }
//   // isLoggedIn():boolean
//   // {
//   //   return this.loggedIn;
//   // }
  
//   getauth(agent){
//    return this.http.post<any>("https://localhost:44396/Authentication",agent);
//  }
authtoken:string="";
  un:boolean=false;
  constructor(private http: HttpClient) { }

  login(username:any,password:any):Observable<any>
  {
    return this.http.post("https://pasauthenticationapi.azurewebsites.net/Authentication", {"username":username,"password":password},
     {
        responseType: 'text',
        
      });    
  
  }

  loggedIn()
  {
    let token=localStorage.getItem("jwt");
    console.log(token)
    return token
  }
 }


