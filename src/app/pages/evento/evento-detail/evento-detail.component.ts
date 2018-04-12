import {Component, Injector, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {EventoModel} from "../../../model/evento.model";
import {EventoService} from '../../../service/evento.service';
import {CategoriaProdutoEnum} from '../../../enum/categoria-produto.enum';
import {ProdutoModel} from '../../../model/produto.model';
import {FornecedorService} from '../../../service/fornecedor.service';
import {ValueModel} from '../../../model/value.model';

@Component({
  selector: 'app-evento-detail',
  templateUrl: './evento-detail.component.html',
  styleUrls: ['./evento-detail.component.scss']
})
export class EventoDetailComponent implements OnInit {

  public loading = false;
  categorias = CategoriaProdutoEnum;
  nomeEvento: string;
  idFornecedor: string;
  lojaFornecedor: string;
  evento: EventoModel;
  produtos: ProdutoModel[] = new Array();
  activatedRoute: ActivatedRoute;
  private service: EventoService;
  private fornecedorService: FornecedorService;

  constructor(private injector: Injector) {
    this.activatedRoute = this.injector.get(ActivatedRoute);
    this.fornecedorService = this.injector.get(FornecedorService);
    this.service = this.injector.get(EventoService);
  }

  ngOnInit() {
    this.getParamSubscribe(params => {
      this.nomeEvento = params['evento'];
      this.idFornecedor = params['fornecedor'];
      this.getLinkLoja();
      this.getEvento();
    });
  }

  getEvento(): void {
    this.loading = true;
    this.service.getByEventoFornecedor(this.nomeEvento, this.idFornecedor).subscribe((res: EventoModel) => {
      this.evento = res;
      this.produtos = res.produtos;
      this.loading = false;
    });
  }

  getLinkLoja(): void {
    this.loading = true;
    this.fornecedorService.getLinkLoja(this.idFornecedor).subscribe((res: ValueModel) => {
      this.lojaFornecedor = res.value;
      this.loading = false;
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
