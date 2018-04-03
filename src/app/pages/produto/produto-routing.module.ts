import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProdutoListComponent} from "./produto-list/produto-list.component";
import {ProdutoFormComponent} from "./produto-form/produto-form.component";

const routes: Routes = [
  {path: '', component: ProdutoListComponent},
  {path: 'list', component: ProdutoListComponent},
  {path: 'form', component: ProdutoFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutoRoutingModule { }
