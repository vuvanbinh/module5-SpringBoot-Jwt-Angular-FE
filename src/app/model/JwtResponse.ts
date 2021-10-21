export class JwtResponse{
  public token?:string;
  public id?:any;
  public fullName?:string;
  public avatar?:string;
  public roles?:any;


  constructor(token: string, id: any, fullName: string, avatar: string, roles: any) {
    this.token = token;
    this.id = id;
    this.fullName = fullName;
    this.avatar = avatar;
    this.roles = roles;
  }
}
