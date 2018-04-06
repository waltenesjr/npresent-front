import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {AbstractService} from './abstract.service';
import {EventoModel} from '../model/evento.model';
import {Observable} from 'rxjs/Observable';

const urlServico = 'evento';

@Injectable()
export class EventoService extends AbstractService<EventoModel> {

  constructor(http: HttpClient) {
    super(http, urlServico);
  }

  getByEventoFornecedor(nome: string, fornecedor: string): Observable<EventoModel> {
    let params = new HttpParams().set('nome', nome).append('fornecedor', fornecedor);
    return this._http.get(this.route + 'get-evento-fornecedor', {params: params}).map((res: EventoModel) => res);
  }
}
