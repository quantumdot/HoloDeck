import { config } from '../config';
import { Injectable, EventEmitter, Output } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';




@Injectable()
export class SystemControlService {

  @Output() suggestInventoryQuery: EventEmitter<any> = new EventEmitter();

  constructor(private http: HttpClient) {
    this.suggestInventoryQuery.subscribe(() => console.log('service saw requery request'));
  }

  requestSystemUpdate(): Observable<any> {
    this.http.post(config.Endpoints.Main + '/system/update', {}).subscribe(console.log);
    return Observable.interval(500)
              .switchMap(() => this.http.get(config.Endpoints.Main + '/system/heartbeat'))
              .map(response => response);
  }
  requestRestartServices(): Observable<any> {
    this.http.post(config.Endpoints.Main + '/system/restart_services', {}).subscribe(console.log);
    return Observable.interval(500)
              .switchMap(() => this.http.get(config.Endpoints.Main + '/system/heartbeat'))
              .map(response => response);
  }
  requestRestartSystem(): Observable<any> {
    this.http.post(config.Endpoints.Main + '/system/restart_system', {}).subscribe(console.log);
    return Observable.interval(500)
              .switchMap(() => this.http.get(config.Endpoints.Main + '/system/heartbeat'))
              .map(response => response);
  }
  requestSshutdownSystem(): Observable<any> {
    this.http.post(config.Endpoints.Main + '/system/shutdown_system', {}).subscribe(console.log);
    return Observable.interval(500)
              .switchMap(() => this.http.get(config.Endpoints.Main + '/system/heartbeat'))
              .map(response => response);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
