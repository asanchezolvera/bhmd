import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideMenu, lucideSearch } from '@ng-icons/lucide';
import { HeaderUserButtonComponent } from './header-user-button/header-user-button.component';
import { HeaderCartButtonComponent } from './header-cart-button/header-cart-button.component';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgIcon, HeaderUserButtonComponent, HeaderCartButtonComponent],
  providers: [provideIcons({ lucideMenu, lucideSearch })],
  templateUrl: './header.component.html',
})
export class HeaderComponent {}
