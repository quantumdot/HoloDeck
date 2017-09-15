import { Component, OnInit } from '@angular/core';
import { Media, MediaInventoryService } from './mediaInventory.service';
import { SwiperModule } from 'angular2-useful-swiper';


@Component({
  selector: 'app-media-items',
  providers: [MediaInventoryService],
  templateUrl: './media-items.component.html',
  styles: [
    // ':host{ height:70%; margin-top:50%; display: block; }',
    ':host{ position: fixed; top: 150px; }',
    // '.itemscontiner{ background:#3f3f3f; padding:20px; }',
    'md-card{ margin-bottom:10px; }',
    'md-card-content img{width:100%}'
  ]
})

export class MediaItemsComponent implements OnInit {
  mediaItems: Media[];
  swiperConfig: SwiperOptions = {
            pagination: '.swiper-pagination',
            paginationClickable: true,
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            spaceBetween: 30
        };
  constructor(private mediaItemService: MediaInventoryService) {


  }
  fetchMedia(): void {
    this.mediaItemService.getMediaItems().then(media => this.mediaItems = media);
  }
  requestPlay(event, media): void{
    this.mediaItemService.requestPlay(media);
  }

  ngOnInit(): void {
    this.fetchMedia();
  }

}
