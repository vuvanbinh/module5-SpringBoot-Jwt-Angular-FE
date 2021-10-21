import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment.prod';
import {SignUpForm} from '../model/SignUpForm';
import {Observable} from 'rxjs';
import {SignInForm} from "../model/SignInForm";
import {JwtResponse} from "../model/JwtResponse";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  data?:boolean;

  //API LOCAL
  private API_SIGNUP = environment.API_LOCAL + 'user/signup';
  private API_SIGNIN = environment.API_LOCAL + 'user/signIn';
  private CHANGE_AVATAR_API = environment.API_LOCAL+'user/changeAvatar?avatar=';


  constructor(private http: HttpClient,
              private router: Router) {
  }

  signUp(signUp: SignUpForm): Observable<any> {
    return this.http.post<any>(this.API_SIGNUP, signUp);
  }

  signIn(signIn: SignInForm): Observable<any> {
    return this.http.post<any>(this.API_SIGNIN, signIn);
  }

  changeAvatar(avatar?:string):Observable<any>{
    return this.http.put<any>(this.CHANGE_AVATAR_API+avatar,avatar)
  }


  logOut() {
    if (confirm("Bạn muốn thoát đăng nhập?.")) {
      window.sessionStorage.clear();
      window.location.reload();
    }
    this.router.navigate(['userAccount']);

  }

  setData( data?:boolean){
    this.data = data;
  }
  getData():boolean|undefined{
    return this.data;
  }

}





