
export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  rating: number;
  reviews: number;
  imageUrl: string;
}

export type PetType = 'dog' | 'cat' | 'other';
