import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toString',
  standalone: true
})
export class ToStringPipe implements PipeTransform {

  transform(value: string | undefined): string {
    if (value != undefined) {
      return value
    }
    return ""
  }

}
