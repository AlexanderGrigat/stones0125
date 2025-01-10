import { hasSavedGuard } from '../utils/guards/has-saved.guard';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { Routes } from '@angular/router';

export const productRoutes: Routes = [
  {path: '', component: ProductListComponent},
  {path: 'new', component: ProductFormComponent, canDeactivate:[hasSavedGuard]},
  {path: 'new/:id', component: ProductFormComponent, canDeactivate:[hasSavedGuard]}
];