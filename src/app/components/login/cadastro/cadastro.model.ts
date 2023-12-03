export class  Cadastro {
  codigo: number = 0;
  nome: string = "";
  email: string = "";
  senha: string = "";
  telefone: string = "";

  constructor(obj?:Cadastro){
      if(obj!=undefined){
          this.codigo = obj.codigo;
          this.nome = obj.nome;
          this.email = obj.email;
          this.senha = obj.senha;
          this.telefone = obj.telefone;
      }
  }
}
