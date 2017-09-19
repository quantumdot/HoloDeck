import { MediaControlService, PlayerState } from '../media-controller/media-control.service';
import { WebSocketService } from '../services/websocket.service';
import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef, MD_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'volume-control',
  templateUrl: './volume-control.component.html',
  //styleUrls: ['./video-settings.component.css'],
  providers: [MediaControlService, WebSocketService],
  // declarations: [ImageCropperComponent]
})
export class VolumeControlComponent implements OnInit {
  
  pstate: PlayerState;

  constructor(private mediaControlService: MediaControlService) {

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

  

}
