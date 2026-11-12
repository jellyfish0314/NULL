export type CategoryId = 'all' | 'light-artifacts' | 'botanical-care' | 'textile-living' | 'minimal-gifting';

export interface Product {
  id: string;
  name: string;
  enName: string;
  category: CategoryId;
  categoryLabel: string;
  series: string;
  price: number;
  image: string;
  secondaryImage?: string;
  summary: string;
  description: string;
  lightFeature: string;
  materials: string[];
  dimensions?: string;
  sustainableNote: string;
  inStock: boolean;
  featured?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
  giftWrapping?: boolean;
  giftMessage?: string;
}
