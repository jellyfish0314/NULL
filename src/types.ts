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

export interface LightPreset {
  id: string;
  name: string;
  time: string;
  angle: number; // 15 to 165 degrees
  intensity: number; // 0.4 to 1.0
  colorTemp: string; // warm amber to crisp cool
  causticOpacity: number;
  shadowBlur: number;
  description: string;
}
