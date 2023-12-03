export class  Login {
  nome: string = "";
  senha: string = "";

  constructor(obj?:Login){
      if(obj!=undefined){
          this.nome = obj.nome;
          this.senha = obj.senha;
      }
  }
}
