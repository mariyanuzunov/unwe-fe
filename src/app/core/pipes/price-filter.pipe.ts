import { Pipe, PipeTransform } from '@angular/core';
import { IDoor } from 'src/app/shared/interfaces/door.interface';

@Pipe({ name: 'priceFilter' })
export class PriceFilterPipe implements PipeTransform {
  transform(
    items: IDoor[] | [] | null,
    min: number = 0,
    max: number = 0
  ): any[] {
    if (!items) {
      return [];
    }

    if (!min && !max) {
      return items;
    }

    if (!min && max) {
      return items.filter((p) => p.price <= max);
    }

    if (min && !max) {
      return items.filter((p) => p.price >= min);
    }

    return items.filter((p) => p.price >= min && p.price <= max);
  }
}
