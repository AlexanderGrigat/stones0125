import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product/product.component';
import { UtilsModule } from '../utils/utils.module';


@NgModule({
  declarations: [
    ProductComponent
  ],
  imports: [
    UtilsModule,
    CommonModule,
    ProductRoutingModule
  ],
  exports:[
  ProductComponent,
  ],
})
export class ProductModule { }
