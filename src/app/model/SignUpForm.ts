export class SignUpForm {
  public fullName?: string;
  public email?: string;
  public password?: string;
  public address?: string;
  public avatar?: string;
  public roles:any;


  constructor(fullName: string, email: string, password: string, address: string) {
    this.fullName = fullName;
    this.email = email;
    this.password = password;
    this.address = address;
    this.avatar = 'https://firebasestorage.googleapis.com/v0/b/vubinh-84277.appspot.com/o/download.png?alt=media&token=3dbee61a-2e0e-4e66-9316-f7ec88b90bef';
    this.roles = ['user'];
  }


}
