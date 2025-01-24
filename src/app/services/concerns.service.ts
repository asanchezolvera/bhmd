import { Injectable } from "@angular/core";
import { SupabaseService } from "@src/app/services/supabase.service";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ConcernsService {
  private concernsSubject = new BehaviorSubject<any[]>([]);
  concerns$ = this.concernsSubject.asObservable();

  constructor(private supabaseService: SupabaseService) {
    this.loadConcerns();
  }

  private loadConcerns() {
    this.supabaseService.getProductConcerns().subscribe((data) => {
      this.concernsSubject.next(data);
    });
  }
}
