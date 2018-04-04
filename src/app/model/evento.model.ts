import {TipoEventoEnum} from '../enum/tipo-evento.enum';
import {ProdutoModel} from './produto.model';

export class EventoModel {
  constructor(public id: number, public nome: string, public tipo: TipoEventoEnum, public fornecedor: number, public imagem: string | any, public produtos: ProdutoModel[]) {
    this.id = id;
    this.nome = nome;
    this.tipo = tipo;
    this.fornecedor = fornecedor;
    this.imagem = imagem;
    this.produtos = produtos;
  }
}
