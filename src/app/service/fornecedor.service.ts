import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {FornecedorModel} from '../model/fornecedor.model';
import {AbstractService} from './abstract.service';
import {Observable} from 'rxjs/Observable';
import {ValueModel} from '../model/value.model';

const urlServico = 'fornecedor';

@Injectable()
export class FornecedorService extends AbstractService<FornecedorModel> {

  constructor(http: HttpClient) {
    super(http, urlServico);
  }

  getLinkLoja(fornecedor: string): Observable<ValueModel> {
    return this._http.get(this.route + 'get-link-loja', {params: new HttpParams().set('fornecedor', fornecedor)}).map((res: ValueModel) => res);
  }
}
