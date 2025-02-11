import { Component, Input, OnInit, OnDestroy } from "@angular/core";
import { CommonModule } from "@angular/common";
import { signal, computed } from "@angular/core";

interface Slide {
  id: number;
  content?: string;
  image?: string;
  alt?: string;
}

@Component({
  selector: "app-slider",
  templateUrl: "./slider.component.html",
  imports: [CommonModule],
  standalone: true,
})
export class SliderComponent implements OnInit, OnDestroy {
  @Input({ required: true }) slides!: Slide[];
  @Input() autoPlay = false;
  @Input() autoPlayDelay = 3000;
  @Input() class?: string;

  private currentSlideSignal = signal<number>(0);
  readonly currentSlide = computed(() => this.currentSlideSignal());

  private autoPlayInterval?: number;

  constructor() {}

  ngOnInit(): void {
    if (this.autoPlay) {
      this.startAutoPlay();
    }
  }

  ngOnDestroy(): void {
    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval);
    }
  }

  // Go to the next slide
  nextSlide(): void {
    this.currentSlideSignal.update(
      (current) => (current + 1) % this.slides.length,
    );
  }

  // Go to the previous slide
  prevSlide(): void {
    this.currentSlideSignal.update(
      (current) => (current - 1 + this.slides.length) % this.slides.length,
    );
  }

  // Go to a specific slide
  goToSlide(index: number): void {
    this.currentSlideSignal.set(index);
  }

  // Start the auto play with proper cleanup
  private startAutoPlay(): void {
    this.autoPlayInterval = window.setInterval(() => {
      this.nextSlide();
    }, this.autoPlayDelay);
  }
}
