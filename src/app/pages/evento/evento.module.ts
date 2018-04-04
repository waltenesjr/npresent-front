import {NgModule} from '@angular/core';

import {EventoRoutingModule} from './evento-routing.module';
import {EventoListComponent} from './evento-list/evento-list.component';
import {EventoFormComponent} from './evento-form/evento-form.component';
import {CoreModule} from '../../@core/core.module';
import {ThemeModule} from "../../@theme/theme.module";
import {EventoService} from '../../service/evento.service';
import {FornecedorService} from '../../service/fornecedor.service';
import {ProdutoService} from '../../service/produto.service';

@NgModule({
  imports: [
    ThemeModule.forChild(),
    CoreModule.forChild(),
    EventoRoutingModule
  ],
  declarations: [EventoListComponent, EventoFormComponent],
  providers: [EventoService, FornecedorService, ProdutoService]
})
export class EventoModule {
}
