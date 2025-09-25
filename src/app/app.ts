import { Component, inject } from "@angular/core";
import { FlowBiteServices } from "./core/services/flowbite/flow-bite.services";
import { from, interval, Observable, of } from "rxjs";
import { Navbar } from "./core/components/navbar/navbar";
import { Footer } from "./core/components/footer/footer";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: "app-root",
  imports: [RouterOutlet, Footer],
  templateUrl: "./app.html",
  styleUrl: "./app.css",
})
export class App {}

// prom = new Promise((resolve, reject) => {
//   resolve("1- Hello Resolved");

//    reject("2- Hello Rejected");
// });

// this.prom
//     .then((response) => {
//       console.log(response);
//     })
//     .catch((response) => {
//       console.log(response);
//     })
//     .finally(() => {
//       console.log("Finally");
//     });
