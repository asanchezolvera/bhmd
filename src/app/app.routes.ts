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
    path: "create-account",
    loadComponent: () =>
      import("./pages/auth/create-account/create-account.component").then(
        (m) => m.CreateAccountComponent,
      ),
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
    path: "category/:slug",
    loadComponent: () =>
      import("./pages/categories/categories.component").then(
        (m) => m.CategoriesComponent,
      ),
  },
  {
    path: "legal/:fileName",
    loadComponent: () =>
      import("./pages/legal/legal.component").then((m) => m.LegalComponent),
  },
];
