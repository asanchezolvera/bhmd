import { Component } from "@angular/core";
import { bootstrapApplication } from "@angular/platform-browser";
import { DatePipe } from "@angular/common";
import { provideRouter, RouterOutlet } from "@angular/router";
import { routes } from "./app/app.routes";
import { provideHttpClient } from "@angular/common/http";

@Component({
  selector: "app-root",
  template: ` <router-outlet></router-outlet> `,
  imports: [RouterOutlet],
  providers: [DatePipe],
  standalone: true,
})
export class App {
  name = "Beverly Hills MD® Cosmeceuticals";
}

bootstrapApplication(App, {
  providers: [provideRouter(routes), provideHttpClient(), DatePipe],
}).catch((err) => console.error(err));
