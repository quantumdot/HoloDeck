import { WebSocketService } from '../services/websocket.service';
import { MediaControlService, PlayerState } from './media-control.service';
import { Component, OnInit } from '@angular/core';
import { MdIconRegistry, MdSliderChange, OverlayContainer } from '@angular/material';
import { MdDialog, MdDialogRef, MD_DIALOG_DATA } from '@angular/material';
import { VolumeControlComponent } from './volume-control.component';


@Component({
  selector: 'app-media-controller',
  templateUrl: './media-controller.component.html',
  providers: [MediaControlService, WebSocketService],
  styleUrls: [
   './media-controller.component.scss'
  ],
})

export class MediaControllerComponent implements OnInit {

  currentState: PlayerState;
  constructor(private mediaControlService: MediaControlService, private overlayContainer: OverlayContainer, public dialog: MdDialog) { }

  ngOnInit() {
    this.currentState = this.mediaControlService.getEmptyState();
    this.mediaControlService.State.subscribe(s => {
      if (s == null) {
        this.currentState = this.mediaControlService.getEmptyState();
      } else {
        this.currentState = s;
      }
    });
  }
  open_volume_controls(): void {
  	console.log('got open_volume_controls');
  	let dialogRef = this.dialog.open(VolumeControlComponent, {});
  }
  volume_slider_changed(event: MdSliderChange): void {
    console.log(event);
    this.requestAction('set_volume', [event.value]);
  }

  requestAction(action: string, args: any[]): void {
    this.mediaControlService.requestAction(action, args);
  }

}



