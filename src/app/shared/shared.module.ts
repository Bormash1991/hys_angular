import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UahPipe } from './pipes/uah.pipe';
import { PriceHighlightDirective } from './directives/price-highlight.directive';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { BtnComponent } from './components/btn/btn.component';
import { RouterModule } from '@angular/router';
import { TablesComponent } from './components/tables/tables.component';
import { FilterComponent } from './components/filter/filter.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { UsersTablesComponent } from './components/users-tables/users-tables.component';
import { OrderTableComponent } from './components/order-table/order-table.component';
@NgModule({
  declarations: [
    UahPipe,
    PriceHighlightDirective,
    ProductItemComponent,
    BtnComponent,
    TablesComponent,
    FilterComponent,
    SpinnerComponent,
    UsersTablesComponent,
    OrderTableComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  exports: [
    UahPipe,
    PriceHighlightDirective,
    ProductItemComponent,
    BtnComponent,
    TablesComponent,
    FilterComponent,
    SpinnerComponent,
    UsersTablesComponent,
    OrderTableComponent,
  ],
})
export class SharedModule {}
