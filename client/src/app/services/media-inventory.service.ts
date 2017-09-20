import { config } from '../config';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';



export class Media {
  constructor(public id: number, public name: string, public description: string, public thumbs: string[], public source: string) { }
}

export interface AddMediaProgress {
  complete: boolean;
  task: string;
  help: string;
  total: number;
  recieved: number;
  ratio: number;
  rate: number;
  eta: number;
}



@Injectable()
export class MediaInventoryService {

  constructor(private http: HttpClient) {}

  getMediaItems(): Promise<Media[]> {
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

  requestAdd(url: string): Observable<AddMediaProgress> {
    this.http.get(config.Endpoints.Main + 'addmedia/' + url).subscribe(console.log);
    return Observable.interval(500)
              .switchMap(() => this.http.get(config.Endpoints.Main + 'addmediaprogress/' + url))
              .map(response => response as AddMediaProgress);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
