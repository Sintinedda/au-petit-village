import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { SortPipe } from '../sort.pipe';
import { FilterPipe } from '../filter.pipe';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Product } from './product';
import { ProductService } from './product.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [NgFor, SortPipe, FilterPipe, ReactiveFormsModule, RouterLink],
  template: `
  <div class="products-filter">
    <div class="products-sort">
      <p class="products-sort-txt">Tri par prix</p>
      <div class="products-sort-icons">
        <button class="products-sort-btn material-symbols-outlined" (click)="sort = sort === 'asc' ? 'desc' : 'asc'">{{ sort === 'asc' ? 'arrow_downward' : 'arrow_upward' }}</button>
      </div>
    </div>
    <div class="products-search">
      <form [formGroup]="searchForm" class="products-search-form">
        <input formControlName="search" type="text" class="products-search-input" placeholder="Rechercher"/> 
      </form>
    </div>
  </div>
  <div class="products-container">
    <table class="products-table">
      <thead>
        <tr class="products-theader-tr">
          <th class="products-th-name">Produit</th>
          <th class="products-th-price">Prix</th>
        </tr>
      </thead>
      <tbody>
        <tr class="products-tbody-tr" *ngFor="let product of (products | sort: sort | filter: searchForm.value.search);">
          <td class="products-td-name">
            <a [routerLink]="['/products', product.id]">
              {{ product.name }}
            </a>     
          </td>
          <td class="products-td-price">{{ product.price }}€</td>
        </tr>
        </tbody>
    </table>
  </div>
  `,
  styles: ``
})
export class ProductsComponent implements OnInit {

  products: Product[] = []; 
  sort: 'asc' | 'desc' = 'asc';
  searchForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService
  ) { 
    this.searchForm = this.formBuilder.group({
      search: '',
    });
  }

  getProducts(): void {
    this.products =this.productService.getProducts();
  }

  ngOnInit(): void {
    this.getProducts();
  }
}


