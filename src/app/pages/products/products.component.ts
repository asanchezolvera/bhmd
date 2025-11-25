import { Component } from '@angular/core';
import { ProductsGridComponent } from '../../products/products-grid/products-grid.component';

@Component({
  selector: 'app-products',
  imports: [ProductsGridComponent],
  templateUrl: './products.component.html',
})
export class ProductsComponent {}
