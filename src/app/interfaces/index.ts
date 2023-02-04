export interface ProductInterface {
  title: string;
  typeCatalog: string;
  catalogId: number;
  packages: PackageInterface[];
}

export interface PackageInterface {
  title: string;
  image: string;
  detail: string;
  price: string;
}
