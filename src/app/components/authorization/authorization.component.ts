import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from './authorization.service';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.scss']
})
export class AuthorizationComponent implements OnInit {

  public user: RegisterUser;

  constructor(private authService: AuthorizationService) { }

  ngOnInit() {
    this.user = new RegisterUser();
  }

  public signIn() {
    // this.authService.signIn(this.user).subscribe(res => {
    //   alert(res.firstName);
    // })
    this.authService.getDetails().subscribe(res => {
      alert(res.address.country);
    })
  }

  public signUp() {
    this.authService.SignUp(this.user).subscribe(res => {
      alert('success');
    })
  }

}

export class RegisterUser {
  public RegisterUser() {
    this.login = "";
    this.password = "";
    this.firstName = "";
    this.lastName = "";
  }


  login: string;
  password: string;
  firstName: string;
  lastName: string;
}