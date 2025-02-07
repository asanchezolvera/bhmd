import { Routes } from "@angular/router";
import { MainLayoutComponent } from "@layouts/main/main-layout.component";
import { AuthLayoutComponent } from "@layouts/auth/auth-layout.component";
import { HomeComponent } from "@pages/home/home.component";
import { BlogComponent } from "@pages/blog/blog.component";
import { CategoriesComponent } from "@pages/categories/categories.component";
import { LegalComponent } from "@pages/legal/legal.component";
import { ProductsComponent } from "@pages/products/products.component";
import { ProductDetailComponent } from "@pages/product-detail/product-detail.component";
import { CreateAccountComponent } from "@pages/auth/create-account/create-account.component";
import { LoginComponent } from "@pages/auth/login/login.component";
import { ConcernsComponent } from "@pages/concerns/concerns.component";
export const routes: Routes = [
  {
    path: "",
    component: MainLayoutComponent,
    children: [
      { path: "", component: HomeComponent },
      { path: "blog", component: BlogComponent },
      { path: "products/category/:slug", component: CategoriesComponent },
      { path: "products/concern/:slug", component: ConcernsComponent },
      { path: "legal/:fileName", component: LegalComponent },
      { path: "products", component: ProductsComponent },
      { path: "product/:slug", component: ProductDetailComponent },
    ],
  },
  {
    path: "",
    component: AuthLayoutComponent,
    children: [
      { path: "create-account", component: CreateAccountComponent },
      { path: "login", component: LoginComponent },
    ],
  },
];
