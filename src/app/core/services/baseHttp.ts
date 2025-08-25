import { HttpClient } from "@angular/common/http";
import { inject } from "@angular/core";
import { catchError, of, throwError } from "rxjs";

export class BaseHttp {
  protected readonly http = inject(HttpClient);

  post<T>(url: string, data: {}) {
    return this.http.post<T>(url, data).pipe(
      catchError((error) => {
        return of(error);
      })
    );
  }
}
