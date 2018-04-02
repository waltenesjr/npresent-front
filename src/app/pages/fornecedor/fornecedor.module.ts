import {NgModule} from '@angular/core';

import {FornecedorRoutingModule} from './fornecedor-routing.module';
import {FornecedorListComponent} from './fornecedor-list/fornecedor-list.component';
import {FornecedorFormComponent} from './fornecedor-form/fornecedor-form.component';
import {CoreModule} from '../../@core/core.module';
import {FornecedorService} from '../../service/fornecedor.service';

@NgModule({
  imports: [
    CoreModule.forRoot(),
    FornecedorRoutingModule
  ],
  declarations: [FornecedorListComponent, FornecedorFormComponent],
  providers: [FornecedorService]
})
export class FornecedorModule {
}
