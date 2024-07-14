import { Component, ViewChild } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public isPasswordVisible: boolean;

  constructor(
    private _authService: AuthService
  ) {}

  public sendExistingUserInfo() {
  }

  public toggleInputType() {
    this.isPasswordVisible = !this.isPasswordVisible;
  }
}
