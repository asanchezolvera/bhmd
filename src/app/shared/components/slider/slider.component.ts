import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-slider",
  templateUrl: "./slider.component.html",
  imports: [CommonModule],
  standalone: true,
})
export class SliderComponent {
  @Input() slides!: any[];
  @Input() autoPlay: boolean = false;
  @Input() autoPlayInterval: number = 3000;
  @Input() class?: string;

  currentSlideIndex: number = 0;

  constructor() {}

  ngOnInit(): void {
    if (this.autoPlay) {
      this.startAutoPlay();
    }
  }

  // Go to the next slide
  nextSlide(): void {
    this.currentSlideIndex = (this.currentSlideIndex + 1) % this.slides.length;
  }

  // Go to the previous slide
  prevSlide(): void {
    this.currentSlideIndex =
      (this.currentSlideIndex - 1 + this.slides.length) % this.slides.length;
  }

  // Go to a specific slide
  goToSlide(index: number): void {
    this.currentSlideIndex = index;
  }

  // Start the auto play
  startAutoPlay(): void {
    setInterval(() => {
      this.nextSlide();
    }, this.autoPlayInterval);
  }
}
