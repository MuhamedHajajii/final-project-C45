import { environment } from "../../../environments/environments.dev";

export const APP_APIS = {
  // auth
  registerApi: `${environment.apiUrl}auth/signup`,
  signinApi: `${environment.apiUrl}auth/signin`,

  // products
  products: `${environment.apiUrl}products`,

  // category
  category: `${environment.apiUrl}categories`,

  // cart
  cart: `${environment.apiUrl}cart`,
};
