import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  agentName!: string | null;
  invalidLogin:boolean=false;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.agentName = localStorage.getItem("logInAgentName");
  }

  isUserAuthenticated() {
    const token : string | null = localStorage.getItem("jwt");
    if (token != "Username or Password is incorrect") {
      return true;
    }
    else {
      this.invalidLogin=true;
      return false;
    }
  }

  getUrl()
  {
    return "url('https://www.ventivtech.com/hubfs/Website_2020/Pages/Policy/Policy-Banner.jpg')";
  }
}
