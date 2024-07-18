import { Injectable } from '@angular/core';
import { PRODUCTS } from './products';
import { Product } from './product';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts(): Product[] {
    return PRODUCTS;
  }

  getProduct(id: number): Observable<Product | undefined> {
    const product = PRODUCTS.find(product => product.id === id);
    return of(product);
  }
}
