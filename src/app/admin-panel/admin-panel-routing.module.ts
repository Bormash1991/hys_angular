import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPanelComponent } from './admin-panel.component';
import { AuthGuard } from '../shared/services/auth.guard';
const routes: Routes = [
  {
    path: '',
   
    component: AdminPanelComponent,
    children: [
      { path: '', redirectTo: 'users', pathMatch: 'full' },
      {
        path: 'users',
        loadChildren: () =>
          import('src/app/admin-panel/users/users.module').then(
            (m) => m.UsersModule
          ),
      },
      {
        path: 'products',
        loadChildren: () =>
          import('src/app/admin-panel/products/products.module').then(
            (m) => m.ProductsModule
          ),
      },
      {
        path: 'orders',
        loadChildren: () =>
          import('src/app/admin-panel/orders/orders.module').then(
            (m) => m.OrdersModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminPanelRoutingModule {}
