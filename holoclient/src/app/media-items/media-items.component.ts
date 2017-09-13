import { Component, OnInit } from '@angular/core';
import { Media, MediaInventoryService } from './mediaInventory.service';

@Component({
  selector: 'app-media-items',
  providers: [MediaInventoryService],
  templateUrl: './media-items.component.html',
  styles: []
})

export class MediaItemsComponent implements OnInit {
  mediaItems: Media[];

  constructor(private mediaItemService: MediaInventoryService) {


  }
  fetchMedia(): void {
    this.mediaItemService.getMediaItems().then(media => this.mediaItems = media);
  }

  ngOnInit(): void {
    this.fetchMedia();
  }

}
