import { Component, OnInit, Input, ViewChildren, QueryList, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'img-cycler',
  templateUrl: './img-cycler.component.html',
  styles: [
    ':host img{ width: 100%; }'
  ]
})
export class ImgCyclerComponent implements OnInit, AfterViewInit {

  @Input('images') images: string[];
  @Input('rate') rate: number;

  @ViewChildren('img') imageElements: QueryList<ElementRef>;

  private current_idx = 0;
  private timer_handle: any = null;

  constructor() {
    this.rate = 500;
  }

  ngOnInit() {
    
  }

  ngAfterViewInit(): void {
    this.updateVisibility();
    this.start();
  }

  private hideItem(item): void {
    item.nativeElement.style.setProperty('display', 'none');
  }

  private showItem(item): void {
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
