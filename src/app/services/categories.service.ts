import { Injectable } from "@angular/core";
import { SupabaseService } from "@src/app/services/supabase.service";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class CategoriesService {
  private categoriesSubject = new BehaviorSubject<any[]>([]);
  categories$ = this.categoriesSubject.asObservable();

  constructor(private supabaseService: SupabaseService) {
    this.loadCategories();
  }

  private loadCategories() {
    this.supabaseService.getProductCategories().subscribe((data) => {
      this.categoriesSubject.next(data);
    });
  }
}
