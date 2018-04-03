import {Component, Injector, OnInit} from '@angular/core';
import {FornecedorModel} from "../../model/fornecedor.model";
import {FornecedorService} from "../../service/fornecedor.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  fornecedores: FornecedorModel[];
  private service: FornecedorService;

  constructor(private injector: Injector) {
    this.service = this.injector.get(FornecedorService);
  }

  ngOnInit() {
    this.service.getList().subscribe((res: FornecedorModel[]) => {
      this.fornecedores = res;
    });
  }

}
