import { Component, inject, Input } from "@angular/core";
import { IProduct } from "../../../features/products/interfaces/IGetSingleProduct";
import { IProductsData } from "../../../features/products/interfaces/IGetAllProducts";
import { RouterLink } from "@angular/router";
import { CartService } from "../../../features/cart/services/cart.service";
import { ToastrService } from "ngx-toastr";
import { ImagePlaceHolder } from "../../directives/image-place-holder";

@Component({
  selector: "app-products-card",
  imports: [RouterLink, ImagePlaceHolder],
  templateUrl: "./products-card.html",
  styleUrl: "./products-card.css",
})
export class ProductsCard {
  @Input() prod!: IProductsData;

  // Injected Services
  private readonly cartService = inject(CartService);
  private readonly toastrService = inject(ToastrService);

  // variables
  isLoading = false;

  addProduct(productId: string): void {
    this.isLoading = true;

    this.cartService.addProduct(productId).subscribe({
      next: (response) => {
        console.log(response);
        this.isLoading = false;
        this.toastrService.success(response.message);

        this.cartService.cartCount.set(response.numOfCartItems);
      },
    });
  }

  imageLoaded(event: Event): void {
    (event.target as HTMLElement).nextElementSibling?.remove();
  }
}
