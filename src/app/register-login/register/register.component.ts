import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {UserService} from "../../service/user.service";
import {SignUpForm} from "../../model/SignUpForm";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  status= 'Vui lòng nhập vào các thông tin dưới đây!';
  form:any={};

  emailFormControl= new FormControl('',[
    Validators.required,
    Validators.email
  ])

  hide = true;
  signUpForm:any;

  constructor(private userService:UserService,
              private router:Router) { }

  ngOnInit(): void {
  }


  message:any={message:"Email is existed!"}
  ngSubmit() {
    this.signUpForm = new SignUpForm(
      this.form.fullName,
      this.form.email,
      this.form.password,
      this.form.address,
    )
    this.userService.signUp(this.signUpForm).subscribe(data=>{
      if (JSON.stringify(data)===JSON.stringify(this.message)){
        this.status='Email đã tồn tại, vui lòng nhập email khác zô!';
      }else {
        this.status='Đăng ký thành công.';
        this.userService.setData(true);
        this.router.navigate(['login'])
      }
    })
  }

}
