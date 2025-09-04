import { Component, inject, OnInit } from "@angular/core";
import { Categories } from "../../services/categories";
import { ICategoriesData } from "../../interfaces/IGetAllCategories";
import { HeaderTitle } from "../../../../shared/components/header-title/header-title";
import { LoadingSpinner } from "../../../../shared/components/loading-spinner/loading-spinner";

@Component({
  selector: "app-categories-page",
  imports: [HeaderTitle, LoadingSpinner],
  templateUrl: "./categories-page.html",
  styleUrl: "./categories-page.css",
})
export class CategoriesPage implements OnInit {
  //
  private readonly categories = inject(Categories);

  //
  allCategories!: ICategoriesData[];

  ngOnInit(): void {
    this.getAllCategories();
  }

  getAllCategories(): void {
    this.categories.getAllCategories().subscribe({
      next: (response) => {
        this.allCategories = response.data;
      },
    });
  }
}
