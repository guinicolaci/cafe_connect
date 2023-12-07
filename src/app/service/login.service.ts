import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'
import { Login } from '../components/login/login.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  readonly url = 'http://localhost:5000/api/autenticacao/login'
  totalUser!: Login[];

  constructor(private http: HttpClient) {}

  public login(totalUser: Login) {
    let { email, senha } = totalUser;
    this.http.post(this.url, {email: email, senha: senha}).subscribe(data => {
     console.log('totalUser', data);
    });
 }

}
