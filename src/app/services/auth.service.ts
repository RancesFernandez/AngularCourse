import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserModel } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = 'https://identitytoolkit.googleapis.com/v1/accounts:'
  private apikey = 'AIzaSyBebPIZ97a_VF6Nmmslmwc49tHvv72BwjA'


  // Crear nuevos useruario
  // https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]

  // Login
  // https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]



  constructor(private http: HttpClient) { }

  logout(){}

  login(user: UserModel){}

  newUser(user: UserModel){

    const authData = {
      ...user,
      // email: user.email,
      // password: user.password,
      // returnSecureToken: true
    };

    return this.http.post(
      `${this.url}signUp?key=${this.apikey}`,
      authData
    );
  }
}
