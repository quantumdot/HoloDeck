import { config } from '../config';
import { Injectable, EventEmitter, Output } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';

export interface SystemHeartbeat {
  alive: boolean;
}


@Injectable()
export class SystemControlService {

  @Output() suggestInventoryQuery: EventEmitter<any> = new EventEmitter();

  constructor(private http: HttpClient) {
    this.suggestInventoryQuery.subscribe(() => console.log('service saw requery request'));
  }

  requestSystemUpdate(): Observable<SystemHeartbeat> {
    this.http.post(config.Endpoints.Main + 'system/update', {}).subscribe(console.log);
    return this.requestSystemHeartbeat();
  }
  requestRestartServices(): Observable<SystemHeartbeat> {
    this.http.post(config.Endpoints.Main + 'system/restart_services', {}).subscribe(console.log);
    return this.requestSystemHeartbeat();
  }
  requestRestartSystem(): Observable<SystemHeartbeat> {
    this.http.post(config.Endpoints.Main + 'system/restart_system', {}).subscribe(console.log);
    return this.requestSystemHeartbeat();
  }
  requestShutdownSystem(): Observable<SystemHeartbeat> {
    this.http.post(config.Endpoints.Main + 'system/shutdown_system', {}).subscribe(console.log);
    return this.requestSystemHeartbeat();
  }
  requestSystemHeartbeat(interval = 1000): Observable<SystemHeartbeat> {
    return Observable.interval(interval)
              .switchMap(() => this.http.get(config.Endpoints.Main + '/system/heartbeat'))
              .catch(err => Observable.empty())
              .map(response => response as SystemHeartbeat);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
