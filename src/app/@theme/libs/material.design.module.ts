import {ModuleWithProviders, NgModule} from '@angular/core';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatCheckboxModule,
  MatDialogModule,
  MatDividerModule,
  MatFormFieldModule,
  MatInputModule,
  MatListModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatSelectModule,
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
    MatAutocompleteModule
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
    MatAutocompleteModule
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
