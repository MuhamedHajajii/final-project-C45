import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { IRegisterUserResponse } from "../interfaces/IRegisterUserResponse";
import { environment } from "../../../../environments/environments.dev";
import { APP_APIS } from "../../../core/constants/appApis";
import { BaseHttp } from "../../../core/services/baseHttp";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class AuthServices extends BaseHttp {
  private readonly router = inject(Router);

  registerUser(userData: {}) {
    return this.post<IRegisterUserResponse>(APP_APIS.registerApi, userData);
  }

  signInUser(userData: {}) {
    return this.post<IRegisterUserResponse>(APP_APIS.signinApi, userData);
  }

  signout(): void {
    localStorage.clear();
    this.router.navigateByUrl("/signin");
  }
}
