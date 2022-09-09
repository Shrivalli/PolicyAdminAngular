import { Component, OnInit } from '@angular/core';
//import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { FormGroup,FormControl,Validators, NgForm } from "@angular/forms";
import Swal from 'sweetalert2';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  invalidLogin: boolean=false;
    agentName: string="";
    password:string="";
    msg:string="";
    token:string="";
    flag_home:boolean=true;
    constructor(private router: Router, private auth:AuthService) { }
    ngOnInit(): void {
      localStorage.removeItem("jwt");
    }
    successAlert(){
      return Swal.fire('Login Successful...!');
     }
   
     failAlert(){
       return Swal.fire('Incorrect Username/Password');
     }
  
    public login = (form: NgForm) => {
      console.log(form.value);
      
      let userName=form.value.userName;
      let password=form.value.password;
  
      this.auth.login(userName,password).subscribe(
        response => {
          this.token = response;
         // this.msg = this.tokenverification(this.token);
          if(this.token!=null){
          this.auth.authtoken=this.token;
          this.agentName = userName;
          localStorage.setItem("jwt", this.token);
          localStorage.setItem("logInAgentName", this.agentName);
          localStorage.setItem("UserPassword",password);
          this.msg="Login Sucessful!";
          //alert("Logged in!!");
          this.successAlert()
          this.router.navigate(['/home'],{replaceUrl:true});
          this.flag_home=false;
          }
        }, err => {
          this.failAlert();
          //this.msg="Invalid Username/Password!";
          this.invalidLogin = true;
          console.log(this.msg);
      });

  
    }
    getUrl()
{
  return "url('https://www.ventivtech.com/hubfs/Website_2020/Pages/Policy/Policy-Banner.jpg')";
}
  }
