import { Routes } from "@angular/router";

export const CART_ROUTES: Routes = [
  {
    path: "",
    loadComponent: () => import("./pages/cart/cart").then((m) => m.Cart),
  },
  {
    path: "checkout",
    loadComponent: () =>
      import("./pages/checkout/checkout").then((m) => m.Checkout),
  },
];
