import { Injectable } from '@angular/core';
import { Socket } from 'ng-socket-io';
import { config } from '../config';


@Injectable()
export class MediaSocket extends Socket {
    constructor() {
        super({ url: config.Endpoints.ControlStatus, options: {} });
    }
}

