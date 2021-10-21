import { Component, OnInit } from '@angular/core';
import {TokenService} from "../../service/token.service";
import {Router} from "@angular/router";
import {UserService} from "../../service/user.service";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  name?:string;
  avatar?:string;
  checkLogin=false;

  constructor(
    private tokenService:TokenService,
    private userService:UserService,
              ){ }

  ngOnInit(): void {
    if (this.tokenService.getToken()!=null){
      this.checkLogin = true;
      this.name = this.tokenService.getName();
      this.avatar = this.tokenService.getAvatar();
    }
  }

  logOut() {
    this.userService.logOut();
  }


}
