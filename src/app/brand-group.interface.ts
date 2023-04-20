import { Sku } from './sku.interface';

export interface BrandGroup {
  id: number,
  brand: string,
  image: string,
  style: string,
  substyle: string,
  abv: string,
  origin: string,
  information: string,
  skus: Sku[]
}
