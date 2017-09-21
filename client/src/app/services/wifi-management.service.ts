import { config } from '../config';
import { Injectable, EventEmitter, Output } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';



export class WifiAP {
  constructor(public ssid: string, public connected: boolean) { }
}





@Injectable()
export class WifiManagementService {



  constructor(private http: HttpClient) {
    this.suggestInventoryQuery.subscribe(() => console.log('service saw requery request'));
  }

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
