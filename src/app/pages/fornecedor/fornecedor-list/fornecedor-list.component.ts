import {Component, Injector, OnInit} from '@angular/core';
import {FornecedorService} from '../../../service/fornecedor.service';
import {FornecedorModel} from '../../../model/fornecedor.model';

@Component({
  selector: 'app-fornecedor-list',
  templateUrl: './fornecedor-list.component.html',
  styleUrls: ['./fornecedor-list.component.scss']
})
export class FornecedorListComponent implements OnInit {

  list: FornecedorModel[];
  private service: FornecedorService;

  constructor(private injector: Injector) {
    this.service = this.injector.get(FornecedorService);
  }

  ngOnInit() {
    this.service.getList().subscribe((res: FornecedorModel[]) => {
      this.list = res;
    });
  }

}
