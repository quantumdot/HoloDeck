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
    MdProgressBarModule
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
    MdProgressBarModule
  ]
})
export class MaterialModule {}