import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public url = "http://localhost:3000/users";
  // public headers = new HttpHeaders({
  //   'Content-type': 'application/json'
  // });

  constructor(
    // private _http: HttpClient
  ) { }

  // createUserEntityOnDB() {}

  // public getUser() {
  //   return this._http.get(this.url, { headers: this.headers });
  // }

  // public createUser(userInfo: any) {
  //   return this._http.post(this.url, userInfo, { headers: this.headers });
  // }
}
