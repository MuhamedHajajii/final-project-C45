import { isPlatformBrowser } from "@angular/common";
import { HttpInterceptorFn } from "@angular/common/http";
import { inject, PLATFORM_ID } from "@angular/core";

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  //  false                true
  if (!(req.url.includes("cart") || req.url.includes("orders")))
    return next(req);

  //  false                 true
  // if(!(req.url.includes('categories') || req.url.includes('products')))  return next(req)

  // req before request send

  // Token to backend
  const platform = inject(PLATFORM_ID);

  if (isPlatformBrowser(platform)) {
    const userToken = localStorage.getItem("token");

    if (userToken) {
      req = req.clone({
        setHeaders: {
          token: userToken,
        },
      });
    }
  }

  return next(req);

  // after request back [ response ]
};
