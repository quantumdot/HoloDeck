import { MediaControlService, PlayerState } from '../services/media-control.service';
import { WebSocketService } from '../services/websocket.service';
import { Component, OnInit } from '@angular/core';
import {ImageCropperComponent, CropperSettings} from 'ng2-img-cropper';

@Component({
  selector: 'app-video-settings',
  templateUrl: './video-settings.component.html',
  styleUrls: ['./video-settings.component.css'],
  providers: [MediaControlService, WebSocketService],
  // declarations: [ImageCropperComponent]
})
export class VideoSettingsComponent implements OnInit {
  cropperSettings: CropperSettings;
  cropperData: any;
  pstate: PlayerState;

  constructor(private mediaControlService: MediaControlService) {
    this.cropperSettings = new CropperSettings();
    this.cropperSettings.width = 100;
    this.cropperSettings.height = 100;
    this.cropperSettings.croppedWidth = 100;
    this.cropperSettings.croppedHeight = 100;
    this.cropperSettings.canvasWidth = 400;
    this.cropperSettings.canvasHeight = 300;
   }

  ngOnInit() {
    this.pstate = this.mediaControlService.getEmptyState();
    this.mediaControlService.State.subscribe(s => {
      if (s == null) {
        this.pstate = this.mediaControlService.getEmptyState();
      } else {
        this.pstate = s;
      }
    });
  }

  settingsValueChanged(action: string, event: any): void {
    console.log(action, event);
    this.mediaControlService.requestAction(action, [event.value]);
  }

}
