import { Component, inject, Inject, OnInit } from "@angular/core";
import { IProductsData } from "../../../products/interfaces/IGetAllProducts";
import { ProductsServices } from "../../../products/services/products.services";
import { HeaderTitle } from "../../../../shared/components/header-title/header-title";
import { ProductsCard } from "../../../../shared/components/products-card/products-card";
import { LoadingSpinner } from "../../../../shared/components/loading-spinner/loading-spinner";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-popular-products",
  imports: [HeaderTitle, ProductsCard, LoadingSpinner],
  templateUrl: "./popular-products.html",
  styleUrl: "./popular-products.css",
})
export class PopularProducts implements OnInit {
  private readonly productsServices = inject(ProductsServices);
  private readonly activatedRoute = inject(ActivatedRoute);

  allProducts!: IProductsData[];

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts(): void {
    this.productsServices.getAllProducts().subscribe({
      next: (response) => {
        this.allProducts = response.data;
      },
    });
  }
}
