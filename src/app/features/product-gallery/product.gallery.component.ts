import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-product-gallery",
  templateUrl: "./product-gallery.component.html",
  standalone: true,
  imports: [CommonModule],
})
export class ProductGalleryComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
