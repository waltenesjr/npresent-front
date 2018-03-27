import {NgModule} from '@angular/core';

import {EventoRoutingModule} from './evento-routing.module';
import {EventoListComponent} from './evento-list/evento-list.component';
import {EventoFormComponent} from './evento-form/evento-form.component';
import {CoreModule} from '../../@core/core.module';

@NgModule({
  imports: [
    CoreModule.forRoot(),
    EventoRoutingModule
  ],
  declarations: [EventoListComponent, EventoFormComponent]
})
export class EventoModule {
}
