import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductListComponent } from './product-list.component';
import { ProductComponent } from '../product/product.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { provideRouter, RouterModule } from '@angular/router';
import { MockProductService, ProductService } from '../product.service';
import { NettoPipe } from '../../utils/netto.pipe';

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [], 
      imports:[
        ProductListComponent,
        ProductComponent,
        ReactiveFormsModule,
        NettoPipe,
        MatFormFieldModule,
        MatInputModule,
        NoopAnimationsModule,
        RouterModule,
      ],
      providers:[{provide: ProductService, useClass: MockProductService},provideRouter([])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should correctly read product list', () => {
  //   expect(component.products[0].id).toBe(-1);
  // });
});
