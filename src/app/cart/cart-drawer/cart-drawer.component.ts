import { Component, inject } from '@angular/core';
import { CartDrawerService } from './cart-drawer.service';

@Component({
  selector: 'app-cart-drawer',
  templateUrl: './cart-drawer.component.html',
})
export class CartDrawerComponent {
  readonly cartDrawerService = inject(CartDrawerService);
}
