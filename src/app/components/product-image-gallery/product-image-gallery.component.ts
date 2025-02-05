import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-product-image-gallery",
  templateUrl: "./product-image-gallery.component.html",
  standalone: true,
  imports: [CommonModule],
})
export class ProductImageGalleryComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
