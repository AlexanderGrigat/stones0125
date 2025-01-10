import { inject, Injectable } from '@angular/core';
import { Product } from './product';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private readonly http = inject(HttpClient);
  private readonly api = 'https://stone-server.onrender.com/products';

  getList(): Observable<Product[]> {
    return this.http.get<Product[]>(this.api);
  }

  addProduct(product: Partial<Product>){
    return this.http.post<void>(this.api, product);
  }
}

export class MockProductService {
  getList(): Observable<Product[]> {
    return of([
      {
        id: -1,
        name: 'test',
        price: 1,
        weight: 2,
      }
    ])
  }
  newProduct(product: Product): Observable<void> {return of()}
}
