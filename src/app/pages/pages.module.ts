import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PagesRoutingModule} from './pages-routing.module';
import {EventoListComponent} from "./evento/evento-list/evento-list.component";
import {CoreModule} from "./@core/core.module";
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule,
    CoreModule.forChild()
  ],
  declarations: [
    HomeComponent
  ]
})
export class PagesModule {
}
