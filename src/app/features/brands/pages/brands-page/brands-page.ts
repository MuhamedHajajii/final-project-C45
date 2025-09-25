import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

@Component({
  selector: "app-brands-page",
  imports: [CommonModule],
  templateUrl: "./brands-page.html",
  styleUrl: "./brands-page.css",
})
export class BrandsPage {
  isAdmin = true;

  onClicked(): void {
    this.isAdmin = !this.isAdmin;
  }
}
