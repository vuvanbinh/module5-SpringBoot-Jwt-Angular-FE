import { Injectable } from '@angular/core';
// import {stringify} from "querystring";

const ID_KEY = 'Id_Key';
const NAME_KEY = 'Name_Key';
const TOKEN_KEY = 'Token_Key';
const AVATAR_KEY = 'Avatar_Key';
const ROLE_KEY = 'Role_Key';
@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private roles:Array<string> = [];
  constructor() { }

  public setId(id:any){
    window.sessionStorage.removeItem(ID_KEY);
    window.sessionStorage.setItem(ID_KEY,id);
  }
  public getId():any{
    return window.sessionStorage.getItem(ID_KEY);
  }


  public setToken(token:string){
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY,token);
  }
  public getToken():any{
    return window.sessionStorage.getItem(TOKEN_KEY);
  }


  public setName(name:string){
    window.sessionStorage.removeItem(NAME_KEY);
    window.sessionStorage.setItem(NAME_KEY,name);
  }
  public getName():any{
    return window.sessionStorage.getItem(NAME_KEY);
  }


  public setAvatar(avatar:string){
    window.sessionStorage.removeItem(AVATAR_KEY);
    window.sessionStorage.setItem(AVATAR_KEY,avatar);
  }
  public getAvatar():any{
    return window.sessionStorage.getItem(AVATAR_KEY);
  }

  public setRole(roles:string[]){
    window.sessionStorage.removeItem(ROLE_KEY);
    window.sessionStorage.setItem(ROLE_KEY,JSON.stringify(roles))
  }
  public getRole():string[]{
    this.roles=[]
    if (sessionStorage.getItem(TOKEN_KEY)){
      let role = sessionStorage.getItem(ROLE_KEY);
      if (role != null) {
        JSON.parse(role).forEach((role: any) => {
          this.roles.push(role.authority)
        })
      }
    }
    return this.roles;
  }

}
