import { Component } from '@angular/core';
import { Product } from './product/product';

@Component({
  selector: 'stn-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'stones';
  productParent = new Product(1, 'Grabstein Marmor', 14.56, 22.45);
  
  onPriceChange(price: number): void{
    this.productParent.price = price;
    alert('Der Preis hat sich geändert: '+ price)
  }
}
