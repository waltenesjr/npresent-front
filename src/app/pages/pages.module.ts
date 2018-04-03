import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PagesRoutingModule} from './pages-routing.module';
import {CoreModule} from "../@core/core.module";
import {HomeComponent} from './home/home.component';
import {ThemeModule} from "../@theme/theme.module";
import {FornecedorService} from "../service/fornecedor.service";

@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule,
    ThemeModule.forChild(),
    CoreModule.forChild()
  ],
  declarations: [
    HomeComponent
  ],
  providers: [FornecedorService]
})
export class PagesModule {
}
