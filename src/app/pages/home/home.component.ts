import {Component, Injector, OnInit} from '@angular/core';
import {FornecedorModel} from "../../model/fornecedor.model";
import {FornecedorService} from "../../service/fornecedor.service";
import {EventoModel} from '../../model/evento.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  fornecedores: FornecedorModel[];
  eventos: EventoModel[];
  private fornecedorService: FornecedorService;

  constructor(private injector: Injector) {
    this.fornecedores = new Array();
    this.eventos = new Array();
    this.fornecedorService = this.injector.get(FornecedorService);
  }

  ngOnInit() {
    this.fornecedorService.getList().subscribe((res: FornecedorModel[]) => {
      this.fornecedores = res;
    });
  }

}
