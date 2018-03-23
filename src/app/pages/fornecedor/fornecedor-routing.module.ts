import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FornecedorListComponent} from "./fornecedor-list/fornecedor-list.component";
import {FornecedorFormComponent} from "./fornecedor-form/fornecedor-form.component";

const routes: Routes = [
  {path: '', component: FornecedorListComponent},
  {path: 'list', component: FornecedorListComponent},
  {path: 'form', component: FornecedorFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FornecedorRoutingModule {
}
