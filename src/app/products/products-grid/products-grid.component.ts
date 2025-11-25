import { Component, inject, computed } from '@angular/core';
import { ProductService } from '../product-service';

@Component({
  selector: 'app-products-grid',
  templateUrl: './products-grid.component.html',
})
export class ProductsGridComponent {
  private readonly productService = inject(ProductService);
  private readonly productsResource = this.productService.getProducts();

  products = computed(() => this.productsResource.value() ?? []);
}
