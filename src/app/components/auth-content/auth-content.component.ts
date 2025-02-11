import { Component, Input, TemplateRef, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AuthStateService } from "@services/auth-state.service";

@Component({
  selector: "app-auth-content",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./auth-content.component.html",
})
export class AuthContentComponent {
  protected authState = inject(AuthStateService);

  @Input({ required: true }) authenticatedContent!: TemplateRef<any>;
  @Input() fallbackContent?: TemplateRef<any>;
}
