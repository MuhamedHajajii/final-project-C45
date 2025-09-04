import { Component, Input } from "@angular/core";
import { IProduct } from "../../../features/products/interfaces/IGetSingleProduct";
import { IProductsData } from "../../../features/products/interfaces/IGetAllProducts";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-products-card",
  imports: [RouterLink],
  templateUrl: "./products-card.html",
  styleUrl: "./products-card.css",
})
export class ProductsCard {
  @Input() prod!: IProductsData;
}
