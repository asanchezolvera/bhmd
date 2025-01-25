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
