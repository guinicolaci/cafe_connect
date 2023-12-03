import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Login } from '../components/login/login.model';
import { Cadastro } from '../components/login/cadastro/cadastro.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {}

  public login(objeto: Login): Observable<Login> {
    return this.http.post<Login>("http://localhost:5000/api/usuarios", objeto);
  }

  public cadastro(objeto : Cadastro){
    this.http.post<String>("http://localhost:5000/api/usuarios", objeto)
    .subscribe();
  }


  public alterar(obj : Login){
    this.http.put<String>("http://localhost:5000/api/usuarios", obj)
    .subscribe();
  }

}
