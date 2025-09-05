import { Component, inject, OnInit } from "@angular/core";
import { HeaderTitle } from "../../../../shared/components/header-title/header-title";
import { ProductsServices } from "../../services/products.services";
import { ActivatedRoute, Router } from "@angular/router";
import {
  IGetSingleProduct,
  IProduct,
} from "../../interfaces/IGetSingleProduct";
import { PopularProducts } from "../../../home/components/popular-products/popular-products";

@Component({
  selector: "app-products-details",
  imports: [HeaderTitle, PopularProducts],
  templateUrl: "./products-details.html",
  styleUrl: "./products-details.css",
})
export class ProductsDetails {
  // Injected Services

  private readonly productsServices = inject(ProductsServices);
  private readonly router = inject(Router);
  private readonly activatedRoute = inject(ActivatedRoute);

  productId!: string;
  product!: IProduct;
  /**
   *
   * router ==>> Navigation of the website [ info of the website routing ]
   * ActivatedRoute ==>> current Active Route
   *
   *
   */

  constructor() {
    if (this.activatedRoute.snapshot.paramMap.get("slug")) {
    }

    this.activatedRoute.paramMap.subscribe({
      next: (response) => {
        this.productId = response.get("productId") as string;
        this.getSingleProduct();
      },
    });
    // console.log(this.activatedRoute.snapshot.params["productId"]);
    // this.activatedRoute.params.subscribe({
    //   next: (response) => {
    //     console.log(response["productId"]);
    //   },
    // });
    // this.activatedRoute.paramMap.subscribe({
    //   next: (response) => {
    //     console.log(response.get("productId"));
    //   },
    // });
  }

  getSingleProduct(): void {
    this.productsServices.getSingleProduct(this.productId).subscribe({
      next: (response) => {
        console.log(response);
        this.product = response.data;
      },
    });
  }
}
