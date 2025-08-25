import { Component, inject } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { Footer } from "./core/components/footer/footer";
import { FlowBiteServices } from "./core/services/flowbite/flow-bite.services";

@Component({
  selector: "app-root",
  imports: [RouterOutlet, Footer],
  templateUrl: "./app.html",
  styleUrl: "./app.css",
})
export class App {
  private readonly flowbiteService = inject(FlowBiteServices);

  ngOnInit(): void {
    this.flowbiteService.loadFlowbite((flowbite) => {
      flowbite.initFlowbite();
    });
  }
}
