import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'evento', loadChildren: './evento/evento.module#EventoModule'},
  {path: 'produto', loadChildren: './produto/produto.module#ProdutoModule'},
  {path: 'fornecedor', loadChildren: './fornecedor/fornecedor.module#FornecedorModule'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {
}
