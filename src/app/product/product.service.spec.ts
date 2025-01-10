import { TestBed } from '@angular/core/testing';

import { ProductService } from './product.service';
import { Product } from './product';

describe('ProductService', () => {
  let service: ProductService;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getList should return product list', () => {
    expect(service.getList()[0].id).toEqual(0);
  });
  
  it('newProduct should save new product', () => {
    const newProduct = new Product(1, 'test', 20, 40);
    service.addProduct(newProduct);
    expect(service.getList()[0]).toEqual(newProduct);
  });
});