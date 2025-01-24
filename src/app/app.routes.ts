import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: "",
    loadComponent: () =>
      import("./pages/home/home.component").then((m) => m.HomeComponent),
  },
  {
    path: "auth",
    loadComponent: () =>
      import("./pages/auth/auth.component").then((m) => m.AuthComponent),
  },
  {
    path: "blog",
    loadComponent: () =>
      import("./pages/blog/blog.component").then((m) => m.BlogComponent),
  },
  {
    path: "products",
    loadComponent: () =>
      import("./pages/products/products.component").then(
        (m) => m.ProductsComponent,
      ),
  },
  {
    path: "product/:slug",
    loadComponent: () =>
      import("./pages/product-detail/product-detail.component").then(
        (m) => m.ProductDetailComponent,
      ),
  },
  {
    path: "legal/:fileName",
    loadComponent: () =>
      import("./pages/legal/legal.component").then((m) => m.LegalComponent),
  },
];
