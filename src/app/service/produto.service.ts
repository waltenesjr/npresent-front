import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AbstractService} from './abstract.service';
import {ProdutoModel} from '../model/produto.model';

const urlServico = 'produto';

@Injectable()
export class ProdutoService extends AbstractService<ProdutoModel> {

  constructor(http: HttpClient) {
    super(http, urlServico);
  }
}
