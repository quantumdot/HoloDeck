import { config } from '../config';
import { WebSocketService } from '../services/websocket.service';
import { MediaControlService, PlayerState } from '../services/media-control.service';
import { Component, OnInit } from '@angular/core';
import { MdIconRegistry, MdSliderChange } from '@angular/material';



@Component({
  selector: 'app-media-controller',
  templateUrl: './media-controller.component.html',
  providers: [],
  styleUrls: [
   './media-controller.component.scss'
  ],
})

export class MediaControllerComponent implements OnInit {

  vover_open = false;
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
  open_volume_controls(): void {
    this.vover_open = true;
  }
  toggle_volume_controls(): void {
    this.vover_open = !this.vover_open;
  }
  close_volume_controls(): void {
    this.vover_open = false;
  }
  volume_slider_changed(event: MdSliderChange): void {
    this.requestAction('set_volume', [event.value]);
  }
  requestAction(action: string, args: any[]): void {
    this.mediaControlService.requestAction(action, args);
  }

}



