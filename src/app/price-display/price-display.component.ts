import { Component, Input } from '@angular/core';
import { Product } from '../product.model';


@Component({
  selector: 'price-display',
  template: `
  <div class="price-display">\Rs.{{ price }}</div>
`
})
export class PriceDisplayComponent {
  @Input()
  price!: number;


}
