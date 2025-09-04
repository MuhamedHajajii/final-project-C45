import { isPlatformBrowser } from "@angular/common";
import { inject, PLATFORM_ID } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";

export const userGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const platform = inject(PLATFORM_ID);

  if (isPlatformBrowser(platform)) {
    const token = localStorage.getItem("token");

    if (token) {
      return router.parseUrl("/home");
    } else {
      return true;
    }
  }

  return true;
};
