import { Injectable } from "@angular/core";
import { BaseHttp } from "../../../core/services/baseHttp";
import { APP_APIS } from "../../../core/constants/appApis";
import { IAddToCartResponse } from "../interfaces/IAddToCartResponse";
import { IGetUserCartResponse } from "../interfaces/IGetUserCartResponse";

@Injectable({
  providedIn: "root",
})
export class CartService extends BaseHttp {
  // CRUD

  // Create
  addProduct(productId: string) {
    return this.post<IAddToCartResponse>(
      APP_APIS.cart,
      {
        productId: productId,
      },
      {
        token: localStorage.getItem("token"),
      }
    );
  }

  // Retrieve
  getCart() {
    return this.get<IGetUserCartResponse>(APP_APIS.cart, undefined, {
      token: localStorage.getItem("token"),
    });
  }

  // Update
  updateProduct() {}
  // Delete [ clear ]
  deleteProduct() {}

  clearCart() {}
}
