import { Injectable } from "@angular/core";
import { BaseHttp } from "../../../core/services/baseHttp";
import { APP_APIS } from "../../../core/constants/appApis";
import { IGetAllCategories } from "../interfaces/IGetAllCategories";
import { IGetSingleCategory } from "../interfaces/IGetSingleCategory";

@Injectable({
  providedIn: "root",
})
export class Categories extends BaseHttp {
  getAllCategories() {
    return this.get<IGetAllCategories>(APP_APIS.category);
  }
  getSingleCategories(categoryID: string) {
    return this.get<IGetSingleCategory>(`${APP_APIS.category}/${categoryID}`);
  }
}
