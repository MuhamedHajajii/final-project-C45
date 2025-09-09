import { isPlatformBrowser } from "@angular/common";
import { inject, PLATFORM_ID } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { jwtDecode } from "jwt-decode";
import { AuthServices } from "../../features/auth/services/auth.services";

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const platform = inject(PLATFORM_ID);
  const authServices = inject(AuthServices);

  if (isPlatformBrowser(platform)) {
    const token = localStorage.getItem("token");

    if (token) {
      jwtDecode(token);
      try {
        console.log(jwtDecode(token));
      } catch {
        authServices.signout();
      }

      return true;
    } else {
      return router.parseUrl("/signin");
    }
  }

  return true;
};
