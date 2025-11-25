import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header-link-item',
  imports: [RouterLink],
  templateUrl: './header-link-item.component.html',
})
export class HeaderLinkItemComponent {
  @Input() href!: string | '';
  @Input() label!: string | '';
}
