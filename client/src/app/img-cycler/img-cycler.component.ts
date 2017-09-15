import { Component, OnInit, Input, ViewChildren, QueryList, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-img-cycler',
  templateUrl: './img-cycler.component.html',
  styles: [
    ':host img{ width: 100%; }'
  ]
})
export class ImgCyclerComponent implements OnInit, AfterViewInit {

  @Input() images: string[];
  @Input() rate: number;

  @ViewChildren('img') imageElements: QueryList<ElementRef>;

  private current_idx = 0;
  private timer_handle: any = null;

  constructor() { }

  ngOnInit() {
    // console.log(this);
    this.rate = 500;
  }

  ngAfterViewInit(): void {
    // console.log(this);
    // console.log(this.imageElements);
    this.updateVisibility();
    this.start();
  }

  private hideItem(item): void {
    // console.log('hiding item', item);
    item.nativeElement.style.setProperty('display', 'none');
  }

  private showItem(item): void {
    // console.log('showing item', item);
    item.nativeElement.style.setProperty('display', 'block');
  }

  private updateVisibility(): void {
    this.imageElements.forEach((itm, idx) => {
      if (this.current_idx === idx) {
        this.showItem(itm);
      } else {
        this.hideItem(itm);
      }
    });
  }

  start(): void {
    this.timer_handle = setTimeout(() => { this.next(); }, this.rate);
  }

  stop(): void {
    clearTimeout(this.timer_handle);
  }

  next(): void {
    this.current_idx++;
    if (this.current_idx >= this.imageElements.length) {
      this.current_idx = 0;
    }
    this.updateVisibility();
    this.timer_handle = setTimeout(() => { this.next(); }, this.rate);
  }

}
