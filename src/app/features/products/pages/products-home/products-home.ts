import { Component, inject, OnInit } from "@angular/core";
import { IProductsData } from "../../interfaces/IGetAllProducts";
import { ProductsServices } from "../../services/products.services";
import { HeaderTitle } from "../../../../shared/components/header-title/header-title";
import { LoadingSpinner } from "../../../../shared/components/loading-spinner/loading-spinner";
import { ProductsCard } from "../../../../shared/components/products-card/products-card";
import { NgxPaginationModule } from "ngx-pagination";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-products-home",
  imports: [HeaderTitle, LoadingSpinner, ProductsCard, NgxPaginationModule],
  templateUrl: "./products-home.html",
  styleUrl: "./products-home.css",
})
export class ProductsHome implements OnInit {
  // Injected Services
  private readonly productsServices = inject(ProductsServices);
  private readonly router = inject(Router);
  private readonly activatedRoute = inject(ActivatedRoute);

  // Variables
  allProducts!: IProductsData[] | undefined;

  page: number = 1;
  totalItems: number = 1;
  itemsPerPage: number = 1;

  constructor() {
    this.page = Number(
      this.activatedRoute.snapshot.queryParamMap.get("page") as string
    );
  }

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts(): void {
    this.productsServices
      .getAllProducts({ page: this.page, limit: 9 })
      .subscribe({
        next: (response) => {
          console.log(response);
          this.allProducts = response.data;
          this.totalItems = response.results;
          this.itemsPerPage = response.metadata.limit;
        },
      });
  }

  pageChanged(pageNumber: number) {
    console.log(pageNumber);
    this.page = pageNumber;
    this.allProducts = undefined;
    this.router.navigate([], {
      queryParams: {
        page: this.page,
      },
    });
    this.getAllProducts();
  }
}
