import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideShoppingCart } from '@ng-icons/lucide';

@Component({
  selector: 'app-header-cart-button',
  standalone: true,
  imports: [NgIcon],
  providers: [provideIcons({ lucideShoppingCart })],
  templateUrl: './header-cart-button.component.html',
})
export class HeaderCartButtonComponent {}
