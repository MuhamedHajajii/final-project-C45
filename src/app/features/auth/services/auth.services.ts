import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IRegisterUserResponse } from "../interfaces/IRegisterUserResponse";
import { environment } from "../../../../environments/environments.dev";
import { APP_APIS } from "../../../core/constants/appApis";
import { BaseHttp } from "../../../core/services/baseHttp";

@Injectable({
  providedIn: "root",
})
export class AuthServices extends BaseHttp {
  registerUser(userData: {}) {
    return this.post<IRegisterUserResponse>(APP_APIS.registerApi, userData);
  }

  signInUser(userData: {}) {
    return this.http.post<IRegisterUserResponse>(APP_APIS.signinApi, userData);
  }
}
