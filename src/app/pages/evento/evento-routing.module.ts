import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EventoListComponent} from "./evento-list/evento-list.component";
import {EventoFormComponent} from "./evento-form/evento-form.component";
import {EventoDetailComponent} from "./evento-detail/evento-detail.component";

const routes: Routes = [
  {path: '', component: EventoListComponent},
  {path: 'list', component: EventoListComponent},
  {path: 'form', component: EventoFormComponent},
  {path: 'detail/:fornecedor/:evento', component: EventoDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventoRoutingModule {
}
