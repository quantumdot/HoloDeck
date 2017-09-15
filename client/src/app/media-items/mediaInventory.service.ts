import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { config } from '../config';


export class Media {
  constructor(public id: number, public name: string, public description: string, public thumbs: string[], public source: string) { }
}



@Injectable()
export class MediaInventoryService {

  constructor(private http: HttpClient) {}

  getMediaItems(): Promise<Media[]> {
    // const headers = new HttpHeaders().set('Access-Control-Allow-Origin', '*');
    return this.http.get(config.Endpoints.Main + 'getmediaitems'/*, { headers: headers }*/)
               .toPromise()
               .then(response => response as Media[])
               .catch(this.handleError);
  }

  requestPlay(media: Media): void {
    this.http.get(config.Endpoints.Main + 'playitem/' + media.id)
               .toPromise()
               .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
