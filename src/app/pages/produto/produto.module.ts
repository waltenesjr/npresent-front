import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProdutoRoutingModule} from './produto-routing.module';
import {CoreModule} from "../../@core/core.module";
import {ThemeModule} from "../../@theme/theme.module";
import {ProdutoFormComponent} from './produto-form/produto-form.component';
import {ProdutoListComponent} from './produto-list/produto-list.component';
import {ProdutoService} from '../../service/produto.service';

@NgModule({
  imports: [
    CommonModule,
    CoreModule.forChild(),
    ThemeModule.forChild(),
    ProdutoRoutingModule
  ],
  declarations: [ProdutoFormComponent, ProdutoListComponent],
  providers: [ProdutoService]
})
export class ProdutoModule {
}
