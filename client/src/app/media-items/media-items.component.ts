import { Component, OnInit, ViewChildren, AfterViewInit, QueryList, ElementRef } from '@angular/core';
import { Media, MediaInventoryService } from './mediaInventory.service';
import { SwiperModule } from 'angular2-useful-swiper';
import {ImgCyclerComponent} from '../img-cycler/img-cycler.component';




@Component({
  selector: 'app-media-items',
  providers: [MediaInventoryService],
  templateUrl: './media-items.component.html',
  styles: [
    // ':host{ height:70%; margin-top:50%; display: block; }',
    ':host{ position: fixed; top: 220px; }',
    // '.itemscontiner{ background:#3f3f3f; padding:20px; }',
    'md-card{ margin-bottom:10px; width: 80%; }',
    // 'md-card-content img{width:100%}'
    '@media screen and (max-device-width: 1000px) and (orientation:landscape){ md-card-content{ display: none; }}'
  ]
})

export class MediaItemsComponent implements OnInit, AfterViewInit {

  mediaItems: Media[];

  swiperConfig: SwiperOptions = {
    direction: 'horizontal',
    speed: 300,
    effect: 'slide',
    spaceBetween: 30
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
    this.fetchMedia();
  }
  ngAfterViewInit(): void {
    // console.log(this);
  }
}
