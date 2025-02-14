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
import { authGuard } from "./guards/auth.guard";
import { publicGuard } from "./guards/public.guard";
import { MyAccountComponent } from "@pages/my-account/my-account.component";

export const routes: Routes = [
  {
    path: "",
    component: MainLayoutComponent,
    children: [
      // All routes are public by default
      { path: "", component: HomeComponent },
      { path: "products", component: ProductsComponent },
      { path: "product/:slug", component: ProductDetailComponent },
      { path: "blog", component: BlogComponent },
      { path: "legal/:fileName", component: LegalComponent },
      { path: "products/category/:slug", component: CategoriesComponent },
      { path: "products/concern/:slug", component: ConcernsComponent },

      // Only protected routes need the authGuard
      {
        path: "my-account",
        component: MyAccountComponent,
        canActivate: [authGuard],
      },
      /*       {
        path: "orders",
        component: OrdersComponent,
        canActivate: [authGuard],
      }, */
    ],
  },
  {
    path: "",
    component: AuthLayoutComponent,
    canActivate: [publicGuard], // Keep auth pages protected from logged-in users
    children: [
      { path: "login", component: LoginComponent },
      { path: "create-account", component: CreateAccountComponent },
    ],
  },
];
