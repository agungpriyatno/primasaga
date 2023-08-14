import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeAgo',
  standalone: true
})
export class TimeAgoPipe implements PipeTransform {

  transform(value: string | undefined): string {
    if (value != undefined) {
      const time = new Date(value);
      const now = new Date();
      const seconds = Math.floor((now.getTime() - time.getTime()) / 1000);

      if (seconds < 60) {
        return 'baru saja';
      } else if (seconds < 120) {
        return 'beberapa menit yang lalu';
      } else if (seconds < 3600) {
        return Math.floor(seconds / 60) + ' menit yang lalu';
      } else if (seconds < 7200) {
        return 'beberapa jam yang lalu';
      } else if (seconds < 86400) {
        return Math.floor(seconds / 3600) + ' jam yang lalu';
      } else {
        return time.toLocaleDateString();
      }
    }
    return "unknown"
  }
}
