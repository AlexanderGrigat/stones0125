import { hasSavedGuard } from './../utils/guards/has-saved.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanDeactivateFn } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductFormComponent } from './product-form/product-form.component';

const routes: Routes = [
  {
      path: 'products', children: [
        {path: '', component: ProductListComponent},
        {path: 'new', component: ProductFormComponent, canDeactivate:[hasSavedGuard]},
        {path: 'new/:id', component: ProductFormComponent, canDeactivate:[hasSavedGuard]}
      ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
