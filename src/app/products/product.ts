export interface IProductVariation {
    id: number;
    product: IProduct;
    unit: IProductUnit;
    size: IProductSize | null;
    color: IProductColor | null;
    code: string;
    name: string;
    excerpt: string | null;
    description: string | null;
    image_url: string | null;
  }

export interface IProduct {
    id: number;
    code: string;
    name: string;
    excerpt: string | null;
    description: string | null;
    image_url: string | null;
}

export interface IProductUnit {
    id: number;
    name: string;
}

export interface IProductSize {
    id: number;
    name: string;
}

export interface IProductColor {
    id: number;
    name: string;
}