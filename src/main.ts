import { Component } from "@angular/core";
import { bootstrapApplication } from "@angular/platform-browser";
import { DatePipe } from "@angular/common";
import { provideRouter } from "@angular/router";
import { routes } from "./app/app.routes";
import { provideHttpClient } from "@angular/common/http";
import { MainLayoutComponent } from "./app/core/layouts/main-layout.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [MainLayoutComponent],
  template: ` <app-main-layout></app-main-layout> `,
  providers: [DatePipe],
})
export class App {
  name = "Beverly Hills MD® Cosmeceuticals";
}

bootstrapApplication(App, {
  providers: [provideRouter(routes), provideHttpClient(), DatePipe],
}).catch((err) => console.error(err));
