import { Pipe, PipeTransform } from "@angular/core";
import { IProductsData } from "../../features/products/interfaces/IGetAllProducts";

@Pipe({
  name: "productsSearch",
})
export class ProductsSearchPipe implements PipeTransform {
  transform(array: IProductsData[], searchText: string): IProductsData[] {
    console.log(searchText);
    return array.filter((product) =>
      product.title.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())
    );
  }
}
