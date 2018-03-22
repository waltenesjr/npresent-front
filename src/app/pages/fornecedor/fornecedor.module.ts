import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FornecedorRoutingModule } from './fornecedor-routing.module';
import { FornecedorListComponent } from './fornecedor-list/fornecedor-list.component';
import { FornecedorFormComponent } from './fornecedor-form/fornecedor-form.component';

@NgModule({
  imports: [
    CommonModule,
    FornecedorRoutingModule
  ],
  declarations: [FornecedorListComponent, FornecedorFormComponent]
})
export class FornecedorModule { }
