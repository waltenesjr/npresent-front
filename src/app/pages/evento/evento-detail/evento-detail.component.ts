import {Component, Injector, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {EventoModel} from "../../../model/evento.model";

@Component({
  selector: 'app-evento-detail',
  templateUrl: './evento-detail.component.html',
  styleUrls: ['./evento-detail.component.scss']
})
export class EventoDetailComponent implements OnInit {

  nomeEvento: string;
  fornecedor: string;
  evento: EventoModel;
  activatedRoute: ActivatedRoute;

  constructor(private injector: Injector) {
    this.activatedRoute = this.injector.get(ActivatedRoute);
  }

  ngOnInit() {
    this.getParamSubscribe(params => {
      this.nomeEvento = params['evento'];
      this.fornecedor = params['fornecedor'];
    });
  }

  getParamSubscribe(fn_: (params) => any): void {
    this.activatedRoute.params.subscribe(params => {
      Promise.resolve(null).then(() => {
        fn_(params);
      });
    });
  }
}
