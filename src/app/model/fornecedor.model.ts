export class FornecedorModel {
  constructor(public id: number, public nome: string, public email: string, public loja: string, public imagem: string | any) {
    this.id = id;
    this.nome = nome;
    this.email = email;
    this.loja = loja;
    this.imagem = imagem;
  }
}
