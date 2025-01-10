import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductFormComponent } from './product/product-form/product-form.component';
import { hasSavedGuard } from './utils/guards/has-saved.guard';
import { productRoutes } from './product/product.routes';

export const appRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'products'},
  { path: 'products', children: productRoutes}
];
