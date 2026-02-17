export interface Product {
  id: string;
  name: string;
  description: string;
  shortDescription: string;
  price: number | string;
  category: string;
  image: string;
  affiliateLink: string;
  rating: number;
  featured: boolean;
  tags: string[];
}

export type Category = 
  | "All"
  | "Beauty"
  | "Fashion"
  | "Home"
  | "Tech"
  | "Gifts";
