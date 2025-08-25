import { Routes } from "@angular/router";
import { AuthLayout } from "./core/layouts/auth-layout/auth-layout";
import { MainLayout } from "./core/layouts/main-layout/main-layout";

export const routes: Routes = [
  // Auth Routes ( GUEST )
  {
    path: "",
    component: AuthLayout,
    loadChildren: () =>
      import("./features/auth/auth.routes").then((m) => m.AUTH_ROUTES),
  },

  //  !! STATIC PAGES  !!

  // APP Routes
  {
    path: "",
    component: MainLayout,
    children: [
      {
        path: "home",
        loadChildren: () =>
          import("./features/home/home.routes").then((m) => m.HOME_ROUTES),
      },
      {
        path: "cart",
        loadChildren: () =>
          import("./features/cart/cart.routes").then((m) => m.CART_ROUTES),
      },
      {
        path: "products",
        loadChildren: () =>
          import("./features/products/products.routes").then(
            (m) => m.PRODUCTS_ROUTES
          ),
      },
      {
        path: "categories",
        loadChildren: () =>
          import("./features/categories/categories.routes").then(
            (m) => m.CATEGORIES_ROUTES
          ),
      },
      {
        path: "brands",
        loadChildren: () =>
          import("./features/brands/brands.routes").then(
            (m) => m.BRANDS_ROUTES
          ),
      },
    ],
  },
];
