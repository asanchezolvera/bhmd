import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SliderComponent } from "@components/slider/slider.component";

@Component({
  selector: "app-top-header",
  imports: [CommonModule, SliderComponent],
  templateUrl: "./top-header.component.html",
  standalone: true,
})
export class TopHeaderComponent implements OnInit {
  SLIDES = [
    {
      id: 1,
      content:
        "Free shipping for Luxe Loyalty members on all orders above $50.",
    },
    {
      id: 2,
      content: "Create a free account for instant savings up to 75% off.",
    },
    {
      id: 3,
      content: "Exclusive bundles have arrived—get them before they're gone!",
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
