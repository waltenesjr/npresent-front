import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {MaterialDesignModule} from "./libs/material.design.module";
import {MatTooltipModule} from "@angular/material";
import {NgModule} from "@angular/core";
import {FileUploadModule} from "ng2-file-upload";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    MaterialDesignModule.forRoot(),
    MatTooltipModule,
    FileUploadModule
  ],
  exports: [
    MatTooltipModule,
    MaterialDesignModule
  ]
})
export class ThemeModule {

  static forChild(): ThemeModule {
    return ThemeModule;
  }

  constructor() {
  }
}
