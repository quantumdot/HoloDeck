import { WebSocketService } from '../services/websocket.service';
import { MediaControlService, PlayerState } from './media-control.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-media-controller',
  templateUrl: './media-controller.component.html',
  providers: [MediaControlService, WebSocketService],
  styles: [
    ':host{ display:block; position: fixed; top:0; left:0; height:30%; width:100%; background:#3f3f3f; z-index:999; border-bottom: 5px solid rgba(240, 240, 240, .5);  -webkit-background-clip: padding-box; background-clip: padding-box;} '
  ],
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
