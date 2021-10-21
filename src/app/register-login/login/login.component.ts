import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {SignInForm} from "../../model/SignInForm";
import {UserService} from "../../service/user.service";
import {TokenService} from "../../service/token.service";
import {first} from "rxjs/operators";
import {Router, Routes} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: any = {};
  status = '';
  hide = true;
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email
  ]);

  constructor(private userService: UserService,
              private tokenService: TokenService,
              private router: Router) {
  }

  ngOnInit(): void {
    if (this.userService.getData()){
      this.status='Đăng ký thành công, mời đăng nhập ngay và luôn!';
    }
  }

  signInForm?: SignInForm;
  message = {message: "no"}
  ngSubmit() {

    this.signInForm = new SignInForm(this.form.email, this.form.password)

    this.userService.signIn(this.signInForm).subscribe(data => {
      if (JSON.stringify(data) === JSON.stringify(this.message)) {
        this.status = 'Email hoặc mật khẩu bị sai, vui lòng nhập lại!';
      } else {
        this.tokenService.setId(data.id);
        this.tokenService.setToken(data.token);
        this.tokenService.setName(data.fullName);
        this.tokenService.setAvatar(data.avatar);
        this.tokenService.setRole(data.roles);

        this.router.navigate(['userAccount']).then(()=>{
          window.location.reload();
        })
      }
    })
  }
}
