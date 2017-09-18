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
  ]
})
export class MaterialModule {}