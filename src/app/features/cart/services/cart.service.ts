import { Injectable } from "@angular/core";
import { BaseHttp } from "../../../core/services/baseHttp";
import { APP_APIS } from "../../../core/constants/appApis";
import { IAddToCartResponse } from "../interfaces/IAddToCartResponse";
import { IGetUserCartResponse } from "../interfaces/IGetUserCartResponse";
import { IUpdateProductResponse } from "../interfaces/IUpdateProductResponse";
import { IDeleteProductResponse } from "../interfaces/IDeleteProductResponse";

@Injectable({
  providedIn: "root",
})
export class CartService extends BaseHttp {
  // CRUD

  // Create
  addProduct(productId: string) {
    return this.post<IAddToCartResponse>(APP_APIS.cart, {
      productId: productId,
    });
  }

  // Retrieve
  getCart() {
    return this.get<IGetUserCartResponse>(APP_APIS.cart);
  }

  // Update
  updateProduct(productID: string, count: number) {
    return this.put<IUpdateProductResponse>(`${APP_APIS.cart}/${productID}`, {
      count: count,
    });
  }
  // Delete [ clear ]
  deleteProduct(productId: string) {
    return this.delete<IDeleteProductResponse>(`${APP_APIS.cart}/${productId}`);
  }

  clearCart() {
    return this.delete<{ message: string }>(APP_APIS.cart);
  }
}
