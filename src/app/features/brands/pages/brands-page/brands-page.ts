import {
  DatePipe,
  DecimalPipe,
  KeyValuePipe,
  LowerCasePipe,
  PercentPipe,
  SlicePipe,
  I18nSelectPipe,
  I18nPluralPipe,
  TitleCasePipe,
  UpperCasePipe,
} from "@angular/common";
import { Component } from "@angular/core";

@Component({
  selector: "app-brands-page",
  imports: [SlicePipe, I18nSelectPipe, I18nPluralPipe],
  templateUrl: "./brands-page.html",
  styleUrl: "./brands-page.css",
})
export class BrandsPage {
  date = new Date();

  employees = [
    {
      name: "Muhamed Hajajii",
      age: 50,
      salary: 1000,
      dept: "IT",
      gender: "male",
    },
    {
      name: "Ola",
      age: 0,
      salary: 1000,
      dept: "IT",
      gender: "female",
    },
    {
      name: "Sa3ed",
      age: 1,
      salary: 2500,
      dept: "IT",
      gender: "male",
    },
    {
      name: "Nadeen",
      age: 12,
      salary: 1000,
      dept: "IT",
      gender: "female",
    },
  ];
}
