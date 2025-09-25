import { inject, Injectable } from "@angular/core";
import { BaseHttp } from "../../../core/services/baseHttp";
import { HttpClient, HttpParams } from "@angular/common/http";
import { APP_APIS } from "../../../core/constants/appApis";
import { IGetAllProducts } from "../interfaces/IGetAllProducts";
import { IGetSingleProduct } from "../interfaces/IGetSingleProduct";
import { Params } from "@angular/router";
import { map } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ProductsServices extends BaseHttp {
  getAllProducts(filter?: Params) {
    const params = new HttpParams().appendAll(filter || {});

    return this.get<IGetAllProducts>(APP_APIS.products, params).pipe(
      map((response) => {
        console.log(response);

        return {
          ...response,
          data: response.data.map((product) => {
            return {
              ...product,
              title: product.title.toUpperCase(),
            };
          }),
        };
      })
    );
  }
  getSingleProduct(productId: string) {
    return this.get<IGetSingleProduct>(`${APP_APIS.products}/${productId}`);
  }
}
