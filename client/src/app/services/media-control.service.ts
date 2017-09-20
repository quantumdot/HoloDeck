import { config } from '../config';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { WebSocketService } from './websocket.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import { Media } from './media-inventory.service';


export interface PlayerState {
  able: PlayerAbilities;
  media: Media;

  is_playing: boolean;
  playback_status: string;
  position: number;
  duration: number;
  rate: number;
  volume: number;
  fullscreen: boolean;
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
  maximum_rate: string;
  minimum_rate: string;
}


@Injectable()
export class MediaControlService {
  public State: BehaviorSubject<PlayerState>;

  constructor(private wsService: WebSocketService, private http: HttpClient) {
    // this.State = new BehaviorSubject<PlayerState>(this.getEmptyState());
    this.State = <BehaviorSubject<PlayerState>>this.wsService
      .connect(config.Endpoints.ControlStatus)
      .map((response: MessageEvent): PlayerState => {
        // console.log(response);
        let data = JSON.parse(response.data);
        // console.log(data);
        return data;
      });
  }
  requestAction(action: string, data: any[]): void {
    this.http.post(config.Endpoints.Main + 'action/' + action, data)
               .toPromise()
               .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  getEmptyState(): PlayerState {
    return {
      able: {
        control: false,
        go_next: false,
        go_previous: false,
        pause: false,
        play: false,
        quit: false,
        seek: false,
        set_fullscreen: false,
        maximum_rate: '',
        minimum_rate: '',
      },
      media: {
        id: NaN,
        name: '',
        description: '',
        source: '',
        thumbs: []
      },
      is_playing: false,
      playback_status: 'Stopped',
      position: 0,
      duration: 1,
      rate: 1,
      fullscreen: true,
      volume: 0
    };
  }
}
