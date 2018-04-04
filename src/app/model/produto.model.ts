import {CategoriaProdutoEnum} from '../enum/categoria-produto.enum';

export class ProdutoModel {
  constructor(public id: number, public nome: string, public link: string, public valor: string, public categoria: CategoriaProdutoEnum) {
    this.id = id;
    this.nome = nome;
    this.link = link;
    this.valor = valor;
    this.categoria = categoria;
  }
}
