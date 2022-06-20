import { Pipe, PipeTransform } from '@angular/core';
import { IDoor } from 'src/app/shared/interfaces/door.interface';

@Pipe({ name: 'categoryFilter' })
export class CategoryFilterPipe implements PipeTransform {
  transform(items: IDoor[] | [] | null, category: string | null): any[] {
    if (!items) {
      return [];
    }
    if (!category) {
      return items;
    }

    return items.filter(
      (p) => p.category.toLocaleLowerCase() == category.toLocaleLowerCase()
    );
  }
}
