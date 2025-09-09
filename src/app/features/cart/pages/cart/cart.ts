import { Component, inject, OnInit } from "@angular/core";
import { CartService } from "../../services/cart.service";
import { ICartData, IProducts } from "../../interfaces/IGetUserCartResponse";
import { RouterLink } from "@angular/router";
import { LoadingSpinner } from "../../../../shared/components/loading-spinner/loading-spinner";
import { CurrencyPipe } from "@angular/common";
import { IProduct } from "../../../products/interfaces/IGetSingleProduct";
import { ToastrService } from "ngx-toastr";
import { error } from "console";
import { HttpErrorResponse } from "@angular/common/http";

@Component({
  selector: "app-cart",
  imports: [RouterLink, LoadingSpinner, CurrencyPipe],
  templateUrl: "./cart.html",
  styleUrl: "./cart.css",
})
export class Cart implements OnInit {
  // Injected Services
  private readonly cartService = inject(CartService);
  private readonly toastrService = inject(ToastrService);

  // variables
  cartData!: ICartData; // assigned value
  cartId!: string;
  totalCartItems!: number;
  totalPrice!: number;
  isLoading = false;

  ngOnInit(): void {
    this.getCart();
  }

  getCart(): void {
    this.cartService.getCart().subscribe({
      next: (response) => {
        this.cartData = response.data;
        this.cartId = response.cartId;
        this.totalCartItems = response.numOfCartItems;
        this.totalPrice = response.data.totalCartPrice;
      },
    });
  }

  updateProduct(prod: IProducts, action: string): void {
    this.isLoading = true;

    prod.count = action === "increment" ? ++prod.count : --prod.count;

    this.cartService.updateProduct(prod.product._id, prod.count).subscribe({
      next: (response) => {
        this.isLoading = false;
        this.cartData = response.data as any;
        this.totalCartItems = response.numOfCartItems;
        this.totalPrice = response.data.totalCartPrice;
      },
    });
  }

  deleteProduct(prod: IProducts): void {
    this.cartService.deleteProduct(prod.product._id).subscribe({
      next: (response) => {
        this.cartData = response.data as any;
      },
    });
  }

  clearCart() {
    this.cartService.clearCart().subscribe({
      next: (response) => {
        this.toastrService.success(response.message);
        this.cartData = [] as any;
      },
      error: (error: HttpErrorResponse) => {
        console.error(error.error);
      },
    });
  }
}
