import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

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

  public sendExistingUserInfo(userInfo: NgForm) {
    if(userInfo.form.valid) {
      console.log('dati inviati', userInfo.form.value);
      this._authService.createUser(userInfo.form.value);
    }
  }

  public toggleInputType() {
    this.isPasswordVisible = !this.isPasswordVisible;
  }
}
