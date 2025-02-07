import { Component, OnInit, inject, signal } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ActivatedRoute, RouterLink } from "@angular/router";
import { Product } from "@models/product.type";
import { ProductCategory } from "@models/productCategory.type";
import { SupabaseService } from "@services/supabase.service";
import { CartService } from "@services/cart.service";
import { ProductImageGalleryComponent } from "@components/product-image-gallery/product-image-gallery.component";
import { OfferSelectorComponent } from "@components/offer-selector/offer-selector.component";
import { AccordionComponent } from "@components/accordion/accordion.component";
import { AccordionItemComponent } from "@components/accordion-item/accordion-item.component";
import { CustomIconComponent } from "@components/icon/custom-icon.component";

@Component({
  selector: "app-product-detail",
  templateUrl: "./product-detail.component.html",
  imports: [
    CommonModule,
    RouterLink,
    ProductImageGalleryComponent,
    OfferSelectorComponent,
    AccordionComponent,
    AccordionItemComponent,
    CustomIconComponent,
  ],
  standalone: true,
})
export class ProductDetailComponent implements OnInit {
  cart = inject(CartService);
  product = signal<Product | null>(null);
  category = signal<ProductCategory | null>(null);

  constructor(
    private route: ActivatedRoute,
    private supabaseService: SupabaseService,
  ) {}

  async ngOnInit() {
    const slug = this.route.snapshot.params["slug"];
    if (!slug) {
      throw new Error("Product slug is required.");
    }
    const product = await this.supabaseService.getProductBySlug(slug);
    this.product.set(product);

    const category = await this.supabaseService.getProductCategoryByName(
      product.category,
    );
    this.category.set(category);
  }
}
