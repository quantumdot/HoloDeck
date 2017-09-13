import { Injectable } from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {WebSocketService} from '../services/websocket.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import {Media} from '../media-items/mediaInventory.service';


const MEDIA_CONTROL_URL = 'ws://localhost:5000/status';

export interface PlayerState {
  able: PlayerAbilities;
  currentMedia: Media;

  duration: number;
  source: string;
  identity: boolean;
  is_playing: boolean;
  maximum_rate: string;
  minimum_rate: string;
  playback_status: string;
  position: number;
  volume: number;
}
export interface PlayerAbilities {
  control: boolean;
  go_next: boolean;
  go_previous: boolean;
  pause: boolean;
  play: boolean;
  quit: boolean;
  seek: boolean;
  set_fullscreen: boolean;
}


@Injectable()
export class MediaControlService {
  public State: Subject<PlayerState> = new Subject<PlayerState>();

  constructor(private wsService: WebSocketService) {
    this.State = <Subject<PlayerState>>this.wsService
      .connect(MEDIA_CONTROL_URL)
      .map((response: MessageEvent): PlayerState => {
        console.log(response)
        let data = JSON.parse(response.data);
        // console.log(data);
        return data;
      });
  }
}
