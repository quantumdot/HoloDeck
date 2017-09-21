import { NgModule } from '@angular/core';

import {
  MdDialogModule,
  MdRadioModule,
  MdListModule,
  MdInputModule,
  MdSelectModule,
  MdButtonModule,
  MdMenuModule,
  MdToolbarModule,
  MdIconModule,
  MdCardModule,
  MdSliderModule,
  MdProgressSpinnerModule,
  MdProgressBarModule,
  MdTableModule
} from '@angular/material';

@NgModule({
  imports: [
    MdDialogModule,
    MdRadioModule,
    MdListModule,
    MdInputModule,
    MdSelectModule,
    MdButtonModule,
    MdMenuModule,
    MdToolbarModule,
    MdIconModule,
    MdCardModule,
    MdSliderModule,
    MdProgressSpinnerModule,
    MdProgressBarModule,
    MdTableModule
  ],
  exports: [
    MdDialogModule,
    MdListModule,
    MdRadioModule,
    MdInputModule,
    MdSelectModule,
    MdButtonModule,
    MdMenuModule,
    MdToolbarModule,
    MdIconModule,
    MdCardModule,
    MdSliderModule,
    MdProgressSpinnerModule,
    MdProgressBarModule,
    MdTableModule
  ]
})
export class MaterialModule {}