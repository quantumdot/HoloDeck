import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'secondsToHms'
})
export class SecondsToHmsPipe implements PipeTransform {

  transform(value: number, args?: any): any {
    let hours = Math.floor(value / 3600);
    value  = value - (hours * 3600);
    let minutes = Math.floor(value / 60);
    let seconds = value - minutes * 60;
    let result = '';
    if (hours > 0) {
      result += hours + ':';
    }
    // if (hours > 0 || minutes > 0) {
      if (hours > 0) {
        result += this.pad(minutes, 2) + ':';
      } else {
        result += minutes + ':';
      }
    // }
    result += this.pad(seconds, 2);
    return result;
  }

  private pad(value: number, length: number): string {
    let s = String(value);
    while (s.length < (length || 2)) {s = '0' + s; }
    return s;
  }
}
