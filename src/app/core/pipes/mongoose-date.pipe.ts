import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mongooseDate',
})
export class MongooseDatePipe implements PipeTransform {
  transform(timestamp: string): string {
    const date: Date = new Date(timestamp);
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
    };
    return date.toLocaleDateString('bg-BG', options);
  }
}
