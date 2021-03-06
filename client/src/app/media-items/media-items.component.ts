import { Component, OnInit } from '@angular/core';
import { Media, MediaInventoryService } from '../services/media-inventory.service';
import { SwiperModule } from 'angular2-useful-swiper';
import { ImgCyclerComponent } from '../img-cycler/img-cycler.component';




@Component({
  selector: 'app-media-items',
  providers: [],
  templateUrl: './media-items.component.html',
  styleUrls: [
   './media-items.component.scss'
  ]
})

export class MediaItemsComponent implements OnInit {

  mediaItems: Media[];

  swiperConfig: SwiperOptions = {
    direction: 'horizontal',
    speed: 300,
    effect: 'slide',
    spaceBetween: 30,
    centeredSlides: true
  };

  constructor(private mediaItemService: MediaInventoryService) {


  }
  fetchMedia(): void {
    this.mediaItemService.getMediaItems().then(media => this.mediaItems = media);
  }

  requestPlay(event, media): void {
    this.mediaItemService.requestPlay(media);
  }

  ngOnInit(): void {
    this.mediaItemService.suggestInventoryQuery.subscribe(() => {
      // console.log('I heard that you want a media requery');
      this.fetchMedia();
    });
    this.fetchMedia();
  }
}
