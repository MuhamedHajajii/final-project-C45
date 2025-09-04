import { RenderMode, ServerRoute } from "@angular/ssr";

export const serverRoutes: ServerRoute[] = [
  {
    path: "details/:productId/:slug",
    renderMode: RenderMode.Server,
  },
  {
    path: "**",
    renderMode: RenderMode.Server,
  },
];
