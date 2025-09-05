import { Component, HostListener, inject, Input } from "@angular/core";
import { RouterLink, RouterLinkActive } from "@angular/router";
import { AuthServices } from "../../../features/auth/services/auth.services";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-navbar",
  imports: [RouterLink, RouterLinkActive],
  templateUrl: "./navbar.html",
  styleUrl: "./navbar.css",
})
export class Navbar {
  @Input() isLoggedIn = false;

  private readonly authServices = inject(AuthServices);

  signOut(): void {
    this.authServices.signout();
  }
}
