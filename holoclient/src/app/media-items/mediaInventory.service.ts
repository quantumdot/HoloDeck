import { Injectable } from '@angular/core';


export class Media {
  constructor(public id: number, public name: string, public thumb: string) { }
}

const DUMMY_ITEMS = [new Media(0, 'Pika', 'hqdefault.jpg')];

@Injectable()
export class MediaInventoryService {

  getMediaItems(): Promise<Media[]> {
    return Promise.resolve(DUMMY_ITEMS);
  }

}
