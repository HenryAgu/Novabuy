export interface ProductCard {
  id: string | number;
  name: string;
  image: string;
  link?: string;
  price?: number;
  category?: string;
  description: string;
}