import { config } from '../config';
import { Injectable, EventEmitter, Output } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';



export interface WifiCell {
  ssid: string;
  signal: string;
  quality: string;
  frequency: string;
  bitrates: string;
  encrypted: boolean;
  channel: number;
  address: string;
  mode: string;
  encryption_type: string;
  saved: boolean;
}





@Injectable()
export class WifiManagementService {

  @Output() suggestRequery: EventEmitter<any> = new EventEmitter();

  constructor(private http: HttpClient) {
    this.suggestRequery.subscribe(() => console.log('service saw requery request'));
  }

  listConnections(): Observable<WifiCell[]> {
    return this.http.get(config.Endpoints.Main + 'wifi/list')
              .map(result => result as WifiCell[])
               .catch(this.handleError);
  }
  
  connect(ssid, passphrase=null): Observable<any> {
    return this.http.post(config.Endpoints.Main + 'wifi/connect', {'ssid': ssid, 'pswd': passphrase})
                .map(result => result)
                .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
