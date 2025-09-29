import { HttpInterceptorFn } from "@angular/common/http";
import { inject } from "@angular/core";
import { NgxSpinnerService } from "ngx-spinner";
import { delay, finalize, tap, timer } from "rxjs";

export const loadingInterceptor: HttpInterceptorFn = (req, next) => {
  const spinner = inject(NgxSpinnerService);
  spinner.show("square-jelly-box");

  return next(req).pipe(
    tap((response) => {
      console.log(response);
    }),
    finalize(() => {
      spinner.hide("square-jelly-box");
    }),
    delay(5000)
  );
};
