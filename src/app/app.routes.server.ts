import { RenderMode, ServerRoute } from "@angular/ssr";

export const serverRoutes: ServerRoute[] = [
  /**
   *
   * >> SSR ==>> Server Side Rendering
   * >> CSR ==>> Client Side rendering
   * >> SSG ==>> Static Site Generation
   * >> ISR ==>> Incremental Site Generation
   */
  {
    path: "**",
    renderMode: RenderMode.Client,
  },
];
