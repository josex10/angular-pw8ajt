import { PipeTransform, Pipe } from '@angular/core';

@Pipe({ name: 'tableKeys' })
export class TableKeysPipe implements PipeTransform {
  transform(value): any {
    return Object.keys(value);
  }
}
