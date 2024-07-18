import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './products/product';

@Pipe({
  name: 'filter',
  standalone: true
})
export class FilterPipe implements PipeTransform {

  transform(value: Product[], searchText: string): Product[] {
    if (!value) {
      return [];
    }
    if (!searchText) {
      return value;
    }
    searchText = searchText.toLocaleLowerCase();

    return value.filter(it => {
      return it.name.toLocaleLowerCase().includes(searchText); 
    });
  }

}
