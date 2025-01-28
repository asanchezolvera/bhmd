import { Component, Input, OnInit, PLATFORM_ID, Inject } from "@angular/core";
import { CommonModule, isPlatformBrowser } from "@angular/common";
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";
import { CleanSvgPipe } from "@src/app/core/pipes/clean-svg.pipe";

@Component({
  selector: "app-custom-icon",
  imports: [CommonModule],
  templateUrl: "./custom-icon.component.html",
  standalone: true,
})
export class CustomIconComponent implements OnInit {
  @Input() svgString!: string;
  @Input({ required: true }) name!: string;
  @Input() size: string | number = "24";
  @Input() class?: string;
  sanitizedSvgString!: SafeHtml;

  constructor(
    @Inject(PLATFORM_ID) private platformId: object,
    private sanitizer: DomSanitizer,
  ) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      if (!this.name || !(this.name in ICONS)) {
        console.warn(`Icon ${this.name} not found`);
        return;
      }
      const rawSvgString = ICONS[this.name as keyof typeof ICONS];
      this.svgString = rawSvgString;
      this.sanitizedSvgString = this.sanitizer.bypassSecurityTrustHtml(
        this.svgString,
      );
    }
  }
}

const ICONS: { [key: string]: string } = {
  chevronDown: `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 10L12 14L16 10" stroke="#323232" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,
  envelope: `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M3 6.8V6.8C3 7.4 3.3 7.9 3.8 8.3L9.8 12.4C11.2 13.3 12.9 13.3 14.3 12.4L20.3 8.4C20.7 7.9 21 7.4 21 6.8V6.8C21 5.8 20.2 5 19.2 5H4.8C3.8 5 3 5.8 3 6.8Z" stroke="#323232" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M3 7V17C3 18.1 3.9 19 5 19H19C20.1 19 21 18.1 21 17V7" stroke="#323232" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M3.588 18.412L9.682 12.318" stroke="#323232" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M14.36 12.36L20.412 18.412" stroke="#323232" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,
  eyeClosed: `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 19.0004C11.158 19.0004 10.315 18.8224 9.49597 18.5054" stroke="#323232" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M20.882 12.4678C18.99 15.9668 15.495 18.9998 12 18.9998" stroke="#323232" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M19.079 8.9209C19.77 9.7299 20.384 10.6119 20.882 11.5329C21.039 11.8239 21.039 12.1769 20.882 12.4679" stroke="#323232" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M5 19L19 5" stroke="#323232" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M9.77302 14.2271C8.54302 12.9971 8.54302 11.0021 9.77302 9.77211C11.003 8.54211 12.998 8.54211 14.228 9.77211" stroke="#323232" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M17.044 6.956C15.497 5.759 13.748 5 12 5C8.50499 5 5.00999 8.033 3.11799 11.533C2.96099 11.824 2.96099 12.177 3.11799 12.468C4.06399 14.217 5.40999 15.849 6.95599 17.045" stroke="#323232" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,
  eyeOpen: `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M3.11799 12.467C2.96099 12.176 2.96099 11.823 3.11799 11.532C5.00999 8.033 8.50499 5 12 5C15.495 5 18.99 8.033 20.882 11.533C21.039 11.824 21.039 12.177 20.882 12.468C18.99 15.967 15.495 19 12 19C8.50499 19 5.00999 15.967 3.11799 12.467Z" stroke="#323232" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M14.1213 9.87868C15.2929 11.0502 15.2929 12.9497 14.1213 14.1213C12.9497 15.2929 11.0502 15.2929 9.87868 14.1213C8.70711 12.9497 8.70711 11.0502 9.87868 9.87868C11.0502 8.70711 12.9497 8.70711 14.1213 9.87868" stroke="#323232" stroke-width="1.4286" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,
  hamburger: `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 5H21" stroke="#323232" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M3 12H21" stroke="#323232" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M3 19H21" stroke="#323232" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,
  search: `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15.7138 6.8382C18.1647 9.28913 18.1647 13.2629 15.7138 15.7138C13.2629 18.1647 9.28913 18.1647 6.8382 15.7138C4.38727 13.2629 4.38727 9.28913 6.8382 6.8382C9.28913 4.38727 13.2629 4.38727 15.7138 6.8382" stroke="#323232" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M19 19L15.71 15.71" stroke="#323232" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,
  shoppingBag: `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M18.064 7H5.936C5.409 7 4.973 7.408 4.938 7.933L4.142 19.867C4.065 21.021 4.981 22 6.138 22H17.862C19.019 22 19.935 21.021 19.858 19.867L19.062 7.933C19.027 7.408 18.591 7 18.064 7Z" stroke="#323232" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M15.001 9V5V5V5C15.001 3.343 13.658 2 12.001 2H12C10.343 2 9 3.343 9 5V5V5V9" stroke="#323232" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,
};
