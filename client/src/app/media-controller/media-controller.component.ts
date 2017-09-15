import { WebSocketService } from '../services/websocket.service';
import { MediaControlService, PlayerState } from './media-control.service';
import { Component, OnInit } from '@angular/core';
import {MdIconRegistry, MdSliderChange} from '@angular/material';

@Component({
  selector: 'app-media-controller',
  templateUrl: './media-controller.component.html',
  providers: [MediaControlService, WebSocketService],
  styles: [
    ':host{ display:block; position: fixed; top:0; left:0; height:30%; width:100%; background:#3f3f3f; z-index:999; border-bottom: 5px solid rgba(0, 0, 0, 0.8);  -webkit-background-clip: padding-box; background-clip: padding-box;} ',
    '#volume_controls{ position:absolute; top:0; right:0; }',
    '#volume_controls button{ display:block; clear:both; margin-top:10px; }',
    'md-progress-spinner{ float:left; margin-right:20px; }',
    '#media_state{}',
    '#media_state span{ display: block; }',
    '#media_state span.title{  }',
    '#media_state span.time{ font-style: italic; }',
    '#control_buttons{ clear:both; margin-left:120px; }'
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
