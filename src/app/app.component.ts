import { Component, EventEmitter } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  products!: Product[];

  constructor() {
    this.products = [new Product(
      "Assassin's Creed",
      'CD',
      '/assets/images/products/ac_b.jpg',
      ['Action-Adventure', 'Single-Player', "Assassin's Creed"],
      1000),

    new Product(
      "FIFA 2020",
      'CD',
      '/assets/images/products/fifa.jpg',
      ['Sports', 'Multi-Player', "FIFA"],
      1500),

    new Product(
      "Grand Theft Auto V",
      'CD',
      '/assets/images/products/gtaV.jpg',
      ['Action-Adventure', 'Multi-Player', "GTA"],
      1200),
    ];
  }
  productWasSelected(product: Product): void {
    console.log('Product clicked: ', product);
  }


}

