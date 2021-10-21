import { Component, OnInit } from '@angular/core';
import {UserService} from "../../service/user.service";
import {TokenService} from "../../service/token.service";

@Component({
  selector: 'app-change-avatar',
  templateUrl: './change-avatar.component.html',
  styleUrls: ['./change-avatar.component.scss']
})
export class ChangeAvatarComponent implements OnInit {

  avatar?:any;
  constructor(private userService:UserService,
              private tokenService:TokenService) { }

  ngOnInit(): void {
  }

  onChangeAvatar($event: string) {
    this.avatar=$event;
  }


  status='';
  message={
    message:"Change avatar success!"
  }
  changeAvatar() {
    this.userService.changeAvatar(this.avatar).subscribe(data=>{
        this.status='Cập nhật ảnh thành công!';
      if (JSON.stringify(data)===JSON.stringify(this.message)){
        this.tokenService.setAvatar(this.avatar);
        window.location.reload();
      }else {
        this.status='Cập nhật ảnh không thành công'
      }
    })

  }
}
