import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from './product';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  template: `
    <main>
      <div class="product-container">
        <h1 class="h1-product">{{ product?.name }}</h1>
        <div class="product-descr">
          <img class="product-img" [src]="product?.image" alt="Figurine {{ product?.name }}" />
          <p class="product-txt">{{ product?.description }}</p>
        </div>
        <div class="product-price">
          <p class="product-price-txt"><strong class="product-price-txt-strong">Prix:</strong> {{ product?.price }}€</p>
        </div>
      </div>
    </main>
  `,
  styles: ``
})
export class ProductComponent implements OnInit {
  product: Product | undefined;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  getProduct(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.productService
      .getProduct(id)
      .subscribe((product) => (this.product = product));
  }

  ngOnInit() {
    this.getProduct();
  }
}
