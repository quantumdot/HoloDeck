import { WebSocketService } from '../services/websocket.service';
import { MediaControlService, PlayerState } from './media-control.service';
import { Component, OnInit } from '@angular/core';
import {MdIconRegistry, MdSliderChange} from '@angular/material';
// import { SmdFabSpeedDialComponent } from '../smd-fab-speed-dial/fab-speed-dial.module';

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
  constructor(private mediaControlService: MediaControlService) { }

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
  volume_slider_changed(event: MdSliderChange): void {
    console.log(event);
    this.requestAction('set_volume', [event.value]);
  }

  requestAction(action: string, args: any[]): void {
    this.mediaControlService.requestAction(action, args);
  }

}
