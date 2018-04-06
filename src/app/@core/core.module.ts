import {ModuleWithProviders, NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AnalyticsService} from './util/analytics.service';
import {ExtraOptions} from '@angular/router/src/router_module';
import {CommonModule} from '@angular/common';
import {EnumToArrayPipe} from './pipe/enum-to-array.pipe';
import {EnumToObjectPipe} from './pipe/enum-to-object.pipe';
import {MoneyDirective} from './directive/money.directive';
import {SearchPipe} from './pipe/search.pipe';
import {LoadingModule} from 'ngx-loading';

export const ROUTE_CONFIG: ExtraOptions = {enableTracing: false, useHash: true};

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LoadingModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    EnumToArrayPipe,
    EnumToObjectPipe,
    SearchPipe,
    MoneyDirective,
    LoadingModule
  ],
  declarations: [
    EnumToArrayPipe,
    EnumToObjectPipe,
    SearchPipe,
    MoneyDirective
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
