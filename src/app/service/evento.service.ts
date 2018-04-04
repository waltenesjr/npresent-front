import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AbstractService} from './abstract.service';
import {EventoModel} from '../model/evento.model';

const urlServico = 'evento';

@Injectable()
export class EventoService extends AbstractService<EventoModel> {

  constructor(http: HttpClient) {
    super(http, urlServico);
  }
}
