import { Routes } from "@angular/router";

export const PRODUCTS_ROUTES: Routes = [
  {
    path: "",
    loadComponent: () =>
      import("./pages/products-home/products-home").then((m) => m.ProductsHome),
  },
];
