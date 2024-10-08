import { Routes } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { ProductsFormComponent } from './components/products-form/products-form.component';

export const routes: Routes = [
    {
        path: '',
        component: ProductsComponent,
      },
      {
        path: 'products-list',
        component: ProductsComponent,
      },
      {
        path: 'create-product',
        component: ProductsFormComponent,
      },
      {
        path: 'product/:id',
        component: ProductsFormComponent,
      },
];
