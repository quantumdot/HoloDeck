import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ImgCyclerComponent } from './img-cycler/img-cycler.component';
import { MediaItemsComponent } from './media-items/media-items.component';
import { MediaControllerComponent } from './media-controller/media-controller.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material.module';
import { HttpClientModule } from '@angular/common/http';
import { SecondsToHmsPipe } from './seconds-to-hms.pipe';
import { BytesToHumanPipe } from './bytes-to-human.pipe';
import { SwiperModule } from 'angular2-useful-swiper';
import { AddMediaComponent } from './add-media/add-media.component';
import { VideoSettingsComponent } from './video-settings/video-settings.component';
import { ImageCropperComponent } from 'ng2-img-cropper';
import { ClickOutsideModule } from 'ng-click-outside';



@NgModule({
  declarations: [
    AppComponent,
    MediaItemsComponent,
    MediaControllerComponent,
    AddMediaComponent,
    VideoSettingsComponent,
    SecondsToHmsPipe,
    BytesToHumanPipe,
    ImgCyclerComponent,
    ImageCropperComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    SwiperModule,
    ClickOutsideModule,
    FormsModule
  ],
  entryComponents: [
    AddMediaComponent,
    VideoSettingsComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
