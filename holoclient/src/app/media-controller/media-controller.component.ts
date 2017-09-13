import { WebSocketService } from '../services/websocket.service';
import { MediaControlService, PlayerState } from './media-control.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-media-controller',
  templateUrl: './media-controller.component.html',
  styles: [],
  providers: [MediaControlService, WebSocketService],
})



export class MediaControllerComponent implements OnInit {

  currentState: PlayerState;
  constructor(private mediaControlService: MediaControlService) { }

  ngOnInit() {
    this.mediaControlService.State.subscribe(s => {
      this.currentState = s;
    });
  }

}
