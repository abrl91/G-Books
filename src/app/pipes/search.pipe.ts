import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(values: any[], term: string): any {
    if (term === undefined || !values) return values;
    return values.filter((value) => {
      return value.title.includes(term) || value.title.toLowerCase().includes(term);
    });
  }

}
