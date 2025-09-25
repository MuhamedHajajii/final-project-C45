import { RenderMode, ServerRoute } from "@angular/ssr";

export const serverRoutes: ServerRoute[] = [
  {
    path: "details/:productId/:slug",
    renderMode: RenderMode.Server,
  },
  {
    path: "details/:productId",
    renderMode: RenderMode.Server,
  },
  {
    path: "cart",
    renderMode: RenderMode.Client,
  },
  {
    path: "**",
    renderMode: RenderMode.Prerender,
  },
];
