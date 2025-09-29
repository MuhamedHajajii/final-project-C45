import { Component, inject, OnInit, signal } from "@angular/core";
import { ActivatedRoute, Router, RouterLink } from "@angular/router";
import { NgxPaginationModule } from "ngx-pagination";
import { every, Subject, Subscription, take, takeUntil } from "rxjs";
import { HeaderTitle } from "../../../../shared/components/header-title/header-title";
import { LoadingSpinner } from "../../../../shared/components/loading-spinner/loading-spinner";
import { ProductsCard } from "../../../../shared/components/products-card/products-card";
import { ProductsSearchPipe } from "../../../../shared/pipes/products-search-pipe";
import { IProductsData } from "../../interfaces/IGetAllProducts";
import { ProductsServices } from "../../services/products.services";
import { Categories } from "../../../categories/services/categories";

@Component({
  selector: "app-products-home",
  imports: [
    HeaderTitle,
    LoadingSpinner,
    ProductsCard,
    NgxPaginationModule,
    ProductsSearchPipe,
    RouterLink,
  ],
  templateUrl: "./products-home.html",
  styleUrl: "./products-home.css",
})
export class ProductsHome implements OnInit {
  // Injected Services
  private readonly productsServices = inject(ProductsServices);
  private readonly categories = inject(Categories);
  private readonly router = inject(Router);
  private readonly activatedRoute = inject(ActivatedRoute);

  // Variables
  allProducts = signal<IProductsData[] | undefined>(undefined);
  searchText: string = "";

  page: number = 1;
  totalItems: number = 1;
  itemsPerPage: number = 1;

  constructor() {
    this.page = Number(
      this.activatedRoute.snapshot.queryParamMap.get("page") as string
    );
  }

  destroy$ = new Subject<void>();

  sub1$!: Subscription;
  sub2$!: Subscription;

  ngOnInit(): void {
    this.getAllProducts();
    this.getAllCategories();
  }

  getAllProducts(): void {
    this.sub1$ = this.productsServices
      .getAllProducts({ page: this.page, limit: 50 })

      .pipe(takeUntil(this.destroy$))

      .subscribe({
        next: (response) => {
          console.log(response);
          this.allProducts.set(response.data);
          this.totalItems = response.results;
          this.itemsPerPage = response.metadata.limit;
        },
      });
  }

  getAllCategories() {
    this.sub2$ = this.categories
      .getAllCategories()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response) => {
          console.log(response);
        },
      });
  }

  pageChanged(pageNumber: number) {
    console.log(pageNumber);
    this.page = pageNumber;
    this.allProducts.set(undefined);
    this.router.navigate([], {
      queryParams: {
        page: this.page,
      },
    });
    this.getAllProducts();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
