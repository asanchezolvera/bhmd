import { Injectable, signal, computed } from "@angular/core";
import { SupabaseService } from "@services/supabase.service";
import { ProductCategory } from "@models/productCategory.type";

@Injectable({
  providedIn: "root",
})
export class CategoriesService {
  private categoriesSignal = signal<ProductCategory[]>([]);

  // Public read-only computed signal
  readonly categories = computed(() => this.categoriesSignal());

  constructor(private supabaseService: SupabaseService) {
    this.loadCategories();
  }

  private loadCategories() {
    this.supabaseService
      .getProductCategories()
      .then((data) => {
        this.categoriesSignal.set(data);
      })
      .catch((error) => {
        console.error("Error loading categories", error);
      });
  }

  // Refresh categories
  refreshCategories() {
    this.loadCategories();
  }
}
