import { Component, inject } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { Observable } from 'rxjs';
import { ProductComponent } from '../product/product.component';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';
import { AsyncPipe, NgClass } from '@angular/common';

@Component({
  selector: 'stn-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
  imports: [
    ProductComponent,
    MatCardModule,
    RouterLink,
    AsyncPipe,
    NgClass
  ]
})
export class ProductListComponent {
  products: Observable<Product[]> = inject(ProductService).getList();

  onPriceChange(price: number): void{
    alert('Der Preis hat sich geändert: '+ price);
  }
}
