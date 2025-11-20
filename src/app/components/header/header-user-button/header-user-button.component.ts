import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideUser } from '@ng-icons/lucide';

@Component({
  selector: 'app-header-user-button',
  standalone: true,
  imports: [NgIcon],
  providers: [provideIcons({ lucideUser })],
  templateUrl: './header-user-button.component.html',
})
export class HeaderUserButtonComponent {}
