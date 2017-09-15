import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ImgCyclerComponent } from './img-cycler/img-cycler.component';
import { MediaItemsComponent } from './media-items/media-items.component';
import { MediaControllerComponent } from './media-controller/media-controller.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { MaterialModule } from './material.module';
import {HttpClientModule} from '@angular/common/http';
import { SecondsToHmsPipe } from './seconds-to-hms.pipe';
import { SwiperModule } from 'angular2-useful-swiper';


@NgModule({
  declarations: [
    AppComponent,
    MediaItemsComponent,
    MediaControllerComponent,
    SecondsToHmsPipe,
    ImgCyclerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    SwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
