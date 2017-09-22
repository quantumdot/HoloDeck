//core angular stuff
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//third-party stuff
import { MaterialModule } from './material.module';
import { SwiperModule } from 'angular2-useful-swiper';
import { ImageCropperComponent } from 'ng2-img-cropper';
import { ClickOutsideModule } from 'ng-click-outside';

//my stuff
import { AppComponent } from './app.component';
import { ImgCyclerComponent } from './img-cycler/img-cycler.component';
import { MediaItemsComponent } from './media-items/media-items.component';
import { MediaControllerComponent } from './media-controller/media-controller.component';
import { SecondsToHmsPipe } from './pipes/seconds-to-hms.pipe';
import { BytesToHumanPipe } from './pipes/bytes-to-human.pipe';
import { AddMediaComponent } from './dialogs/add-media/add-media.component';
import { ConfirmDialogComponent } from './dialogs/confirm-dialog/confirm-dialog.component';
import { ManageWifiComponent } from './dialogs/manage-wifi/manage-wifi.component';
import { VideoSettingsComponent } from './dialogs/video-settings/video-settings.component';
import { DialogsService } from './services/dialogs.service';
import { MediaControlService } from './services/media-control.service';
import { MediaInventoryService } from './services/media-inventory.service';
import { WebSocketService } from './services/websocket.service';
import { WifiManagementService } from './services/wifi-management.service';
import { SystemControlService } from './services/system-control.service';
import { ProgressDialogComponent } from './dialogs/progress-dialog/progress-dialog.component';




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
    ConfirmDialogComponent,
    ManageWifiComponent,
    ProgressDialogComponent
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
    VideoSettingsComponent,
    ConfirmDialogComponent,
    ManageWifiComponent,
    ProgressDialogComponent
  ],
  providers: [MediaInventoryService, WebSocketService, MediaControlService, DialogsService, WifiManagementService, SystemControlService],
  bootstrap: [AppComponent]
})
export class AppModule { }
