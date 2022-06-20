import { Pipe, PipeTransform } from '@angular/core';
import { IDoor } from 'src/app/shared/interfaces/door.interface';

@Pipe({ name: 'manufacturerFilter' })
export class ManufacturerFilterPipe implements PipeTransform {
  transform(items: IDoor[] | [] | null, manufacturer: string | null): any[] {
    if (!items) {
      return [];
    }
    if (!manufacturer) {
      return items;
    }

    return items.filter((p) =>
      p.title.toLocaleLowerCase().includes(manufacturer.toLocaleLowerCase())
    );
  }
}
