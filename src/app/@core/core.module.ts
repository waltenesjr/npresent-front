import {ModuleWithProviders, NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AnalyticsService} from './util/analytics.service';
import {ExtraOptions} from '@angular/router/src/router_module';
import {CommonModule} from '@angular/common';
import {ToastrModule} from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

export const ROUTE_CONFIG: ExtraOptions = {enableTracing: false, useHash: true};

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [AnalyticsService]
    };
  }

  static forChild(): any {
    return CoreModule;
  }
}
