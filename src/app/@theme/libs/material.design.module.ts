import {ModuleWithProviders, NgModule} from '@angular/core';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatCheckboxModule, MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatFormFieldModule,
  MatInputModule,
  MatListModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatSelectModule, MatSidenavModule,
  MatSnackBarModule,
  MatTableModule,
  MatTooltipModule
} from '@angular/material';
import {CdkTableModule} from '@angular/cdk/table';

@NgModule({
  imports: [
    CdkTableModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatTableModule,
    MatPaginatorModule,
    MatDividerModule,
    MatListModule,
    MatCheckboxModule,
    MatRadioModule,
    MatDialogModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatAutocompleteModule,
    MatSidenavModule,
    MatDatepickerModule
  ],
  exports: [
    CdkTableModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatTableModule,
    MatPaginatorModule,
    MatDividerModule,
    MatListModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSnackBarModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatAutocompleteModule,
    MatSidenavModule,
    MatDatepickerModule
  ]
})
export class MaterialDesignModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: MaterialDesignModule,
      providers: []
    };
  }
}
