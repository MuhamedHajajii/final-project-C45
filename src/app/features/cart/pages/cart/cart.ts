import { Component, inject, OnInit } from "@angular/core";
import { CartService } from "../../services/cart.service";
import { ICartData } from "../../interfaces/IGetUserCartResponse";
import { RouterLink } from "@angular/router";
import { LoadingSpinner } from "../../../../shared/components/loading-spinner/loading-spinner";
import { CurrencyPipe } from "@angular/common";

@Component({
  selector: "app-cart",
  imports: [RouterLink, LoadingSpinner, CurrencyPipe],
  templateUrl: "./cart.html",
  styleUrl: "./cart.css",
})
export class Cart implements OnInit {
  // Injected Services
  private readonly cartService = inject(CartService);

  // variables
  cartData!: ICartData;
  cartId!: string;
  totalCartItems!: number;
  totalPrice!: number;

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
}
