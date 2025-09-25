import { Component, inject, Input, OnInit } from "@angular/core";
import { RouterLink, RouterLinkActive } from "@angular/router";
import { AuthServices } from "../../../features/auth/services/auth.services";
import { CartService } from "../../../features/cart/services/cart.service";

@Component({
  selector: "app-navbar",
  imports: [RouterLink, RouterLinkActive],
  templateUrl: "./navbar.html",
  styleUrl: "./navbar.css",
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Navbar implements OnInit {
  @Input() isLoggedIn = false;

  public readonly cartService = inject(CartService);

  private readonly authServices = inject(AuthServices);

  signOut(): void {
    this.authServices.signout();
  }

  ngOnInit(): void {
    // this.cartService.getCart().subscribe({
    //   next: (response) => {
    //     this.cartService.cartCount.set(response.numOfCartItems);
    //   },
    // });
  }
}
