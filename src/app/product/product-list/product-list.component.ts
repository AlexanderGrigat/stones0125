import { Component, inject } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'stn-product-list',
  standalone: false,
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products: Product[] = inject(ProductService).getList();

  onPriceChange(price: number): void{
    alert('Der Preis hat sich geändert: '+ price);
  }
}
