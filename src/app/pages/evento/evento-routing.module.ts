import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EventoListComponent} from "./evento-list/evento-list.component";
import {EventoFormComponent} from "./evento-form/evento-form.component";

const routes: Routes = [
  {path: '', component: EventoListComponent},
  {path: 'list', component: EventoListComponent},
  {path: 'form', component: EventoFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventoRoutingModule {
}
