import { HttpInterceptorFn } from "@angular/common/http";
import { catchError, throwError } from "rxjs";

export const errorsInterceptor: HttpInterceptorFn = (req, next) => {
  // pre requests

  return next(req).pipe(
    catchError((error) => {
      console.error(error.message);

      return throwError(() => error);
    })
  );

  // post requests
};
