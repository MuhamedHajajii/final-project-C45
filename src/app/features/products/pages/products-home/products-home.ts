import { Component, inject, OnInit, signal, Signal } from "@angular/core";
import { ActivatedRoute, Router, RouterLink } from "@angular/router";
import { NgxPaginationModule } from "ngx-pagination";
import { HeaderTitle } from "../../../../shared/components/header-title/header-title";
import { LoadingSpinner } from "../../../../shared/components/loading-spinner/loading-spinner";
import { ProductsCard } from "../../../../shared/components/products-card/products-card";
import { ProductsSearchPipe } from "../../../../shared/pipes/products-search-pipe";
import { IProductsData } from "../../interfaces/IGetAllProducts";
import { ProductsServices } from "../../services/products.services";
import {
  delay,
  every,
  filter,
  find,
  fromEvent,
  interval,
  map,
  of,
  Subject,
  Subscription,
  take,
  takeUntil,
  timer,
} from "rxjs";

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

  // Creation Operators

  // from
  // of

  dataNew = of(1, 2, 3, 4, 5, 6, 7, 8, 9);

  event$ = fromEvent(document, "click");

  data = interval(500);

  subject$ = new Subject<void>();

  timer = timer(4000, 2000);

  ngOnInit(): void {
    this.timer.pipe(takeUntil(this.subject$)).subscribe((response) => {
      console.log(response);
      console.log("Hello World");
    });

    this.dataNew
      .pipe(
        every((response) => {
          return response > 0;
        })
      )
      .subscribe({
        next: (response) => {
          console.log(response);
        },
      });

    this.getAllProducts();
  }

  getAllProducts(): void {
    this.productsServices
      .getAllProducts({ page: this.page, limit: 50 })
      .pipe(takeUntil(this.subject$))
      .subscribe({
        next: (response) => {
          console.log(response);
          this.allProducts.set(response.data);
          this.totalItems = response.results;
          this.itemsPerPage = response.metadata.limit;
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
    this.subject$.next();
    this.subject$.complete();
  }
}
