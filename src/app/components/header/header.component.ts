import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideMenu, lucideSearch } from '@ng-icons/lucide';
import { AnnouncementBarComponent } from './announcement-bar/announcement-bar.component';
import { HeaderUserButtonComponent } from './header-user-button/header-user-button.component';
import { HeaderCartButtonComponent } from './header-cart-button/header-cart-button.component';
import { HeaderLinkItemComponent } from './header-link-item/header-link-item.component';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    NgIcon,
    AnnouncementBarComponent,
    HeaderUserButtonComponent,
    HeaderCartButtonComponent,
    HeaderLinkItemComponent,
  ],
  providers: [provideIcons({ lucideMenu, lucideSearch })],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  headerLinks = [
    { href: '/products', label: 'Shop All' },
    { href: '/products', label: 'Best Sellers' },
    { href: '/products', label: 'Bundles' },
    { href: '/products', label: 'Supplements' },
    { href: '/products', label: 'Cleansers' },
    { href: '/products', label: 'Moisturizers' },
    { href: '/products', label: 'Eye + Lip Care' },
    { href: '/products', label: 'Body' },
    { href: '/products', label: 'Serums + Oils' },
  ];
}
