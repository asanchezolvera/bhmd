import { Injectable, signal, computed } from "@angular/core";
import { SupabaseService } from "@services/supabase.service";
import { ProductConcern } from "@models/productConcern.type";

@Injectable({
  providedIn: "root",
})
export class ConcernsService {
  private concernsSignal = signal<ProductConcern[]>([]);

  // Public read-only computed signal
  readonly concerns = computed(() => this.concernsSignal());

  constructor(private supabaseService: SupabaseService) {
    this.loadConcerns();
  }

  private loadConcerns() {
    this.supabaseService
      .getProductConcerns()
      .then((data) => {
        this.concernsSignal.set(data);
      })
      .catch((error) => {
        console.error("Error loading concerns", error);
      });
  }

  // Refresh concerns
  refreshConcerns() {
    this.loadConcerns();
  }
}
