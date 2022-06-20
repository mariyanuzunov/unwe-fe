import { Pipe, PipeTransform } from '@angular/core';
import { IDoor } from 'src/app/shared/interfaces/door.interface';

@Pipe({ name: 'searchFilter' })
export class SearchFilterPipe implements PipeTransform {
  transform(items: IDoor[] | [] | null, pattern: string): any[] {
    if (!items) {
      return [];
    }
    if (!pattern) {
      return items;
    }
    pattern = pattern.toLocaleLowerCase();

    return items.filter((p) => p.title.toLocaleLowerCase().includes(pattern));
  }
}
