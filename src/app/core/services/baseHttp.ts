import { HttpClient } from "@angular/common/http";
import { inject } from "@angular/core";
import { Params } from "@angular/router";
import { catchError, Observable, of, throwError } from "rxjs";

export abstract class BaseHttp {
  private readonly http = inject(HttpClient);

  protected post<T>(url: string, data: {}, headers?: {}) {
    return this.http
      .post<T>(url, data, {
        headers: headers,
      })
      .pipe(
        catchError((error) => {
          return throwError(() => error);
        })
      );
  }

  protected get<T>(url: string, filters?: Params, headers?: {}) {
    return this.http.get<T>(url, {
      params: filters,
      headers: headers,
    });
  }

  protected delete<T>(url: string, data: {}, headers?: {}) {
    return this.http.delete<T>(url, {
      headers: headers,
    });
  }
  protected put<T>(url: string, data: {}, headers?: {}) {
    return this.http.put<T>(url, data, {
      headers: headers,
    });
  }
}
