import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FornecedorModel} from '../model/fornecedor.model';
import {AbstractService} from './abstract.service';

const urlServico = 'fornecedor';

@Injectable()
export class FornecedorService extends AbstractService<FornecedorModel> {

  constructor(http: HttpClient) {
    super(http, urlServico);
  }
}
