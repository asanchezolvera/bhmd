import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ActivatedRoute, RouterLink } from "@angular/router";
import { Observable } from "rxjs";
import { switchMap } from "rxjs/operators";
import { Product } from "@models/product.type";
import { ProductCategory } from "@models/productCategory.type";
import { SupabaseService } from "@services/supabase.service";
import { CategoriesService } from "@src/app/services/categories.service";
import { ProductGalleryComponent } from "@src/app/features/product-gallery/product.gallery.component";
import { OfferSelectorComponent } from "@src/app/features/offer-selector/offer-selector.component";
import { AccordionComponent } from "@shared/components/accordion/accordion.component";
import { AccordionItemComponent } from "@shared/components/accordion-item/accordion-item.component";

@Component({
  selector: "app-product-detail",
  templateUrl: "./product-detail.component.html",
  imports: [
    CommonModule,
    RouterLink,
    ProductGalleryComponent,
    OfferSelectorComponent,
    AccordionComponent,
    AccordionItemComponent,
  ],
  standalone: true,
})
export class ProductDetailComponent implements OnInit {
  product$!: Observable<Product>;
  category$!: Observable<ProductCategory>;

  constructor(
    private route: ActivatedRoute,
    private supabaseService: SupabaseService,
  ) {}

  ngOnInit() {
    this.product$ = this.route.params.pipe(
      switchMap((params) => {
        const slug = params["slug"];
        if (!slug) {
          throw new Error("Product slug is required.");
        }
        return this.supabaseService.getProductBySlug(slug);
      }),
    );
    this.category$ = this.route.params.pipe(
      switchMap((params) => {
        const slug = params["category"];
        if (!slug) {
          throw new Error("Category slug is required.");
        }
        return this.supabaseService.getProductCategoryBySlug(slug);
      }),
    );
  }
}
