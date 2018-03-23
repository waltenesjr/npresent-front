export class ContadorModel {
  constructor(public nome: string, public categoria: string, public avatar: string | any) {
    this.nome = nome;
    this.categoria = categoria;
    this.avatar = avatar;
  }
}
