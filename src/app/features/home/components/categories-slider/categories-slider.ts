import { Component, inject, OnInit } from "@angular/core";
import {
  ICategoriesData,
  IGetAllCategories,
} from "../../../categories/interfaces/IGetAllCategories";
import { Categories } from "../../../categories/services/categories";
import { CarouselModule, OwlOptions } from "ngx-owl-carousel-o";

@Component({
  selector: "app-categories-slider",
  imports: [CarouselModule],
  templateUrl: "./categories-slider.html",
  styleUrl: "./categories-slider.css",
})
export class CategoriesSlider implements OnInit {
  private readonly categories = inject(Categories);

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

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    autoplay: true,
    autoplayTimeout: 500,
    navText: ["", ""],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 8,
      },
    },
    nav: true,
  };
}
