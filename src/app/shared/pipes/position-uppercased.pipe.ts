import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'positionUppercased'
})
export class PositionUppercasedPipe implements PipeTransform {

  transform(value: string): string {
    if (value.toLocaleLowerCase() === 'manager') {
      return value.toLocaleUpperCase()
    } else {
      return value.toLocaleLowerCase();

    }
  }

}
