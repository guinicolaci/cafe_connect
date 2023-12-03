import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private http: HttpClient) {}

  //EXEMPLOS
  public login() {
    return this.http.post("http://localhost:5000/api/produtos");
  }

  public cadastro(){
    this.http.post<String>("http://localhost:5000/api/produtos")
    .subscribe();
  }


  public alterar(){
    this.http.put<String>("http://localhost:5000/api/produtos")
    .subscribe();
  }
}
