import {HttpClientModule} from '@angular/common/http';
import {ModuleWithProviders, NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AnalyticsService} from './util/analytics.service';
import {ExtraOptions} from '@angular/router/src/router_module';
import {CommonModule} from '@angular/common';

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
