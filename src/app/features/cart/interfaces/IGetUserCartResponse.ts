export interface Subcategory {
  _id: string;
  name: string;
  slug: string;
  category: string;
}

export interface Category {
  _id: string;
  name: string;
  slug: string;
  image: string;
}

export interface Brand {
  _id: string;
  name: string;
  slug: string;
  image: string;
}

export interface Product {
  subcategory: Subcategory[];
  _id: string;
  title: string;
  quantity: number;
  imageCover: string;
  category: Category;
  brand: Brand;
  ratingsAverage: number;
  id: string;
}

export interface IProducts {
  count: number;
  _id: string;
  product: Product;
  price: number;
}

export interface ICartData {
  _id: string;
  cartOwner: string;
  products: IProducts[];
  createdAt: string;
  updatedAt: string;
  __v: number;
  totalCartPrice: number;
}

export interface IGetUserCartResponse {
  status: string;
  numOfCartItems: number;
  cartId: string;
  data: ICartData;
}
