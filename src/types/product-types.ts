export interface Product {
  id: string;
  slug: string;
  title: string;
  shortDescription?: string;
  description: string;
  brand?: string;
  category?: string;
  subcategory?: string;
  tags?: string[];

  price: number;
  oldPrice?: number;
  currency: string;

  discountPercentage?: number;
  isDiscounted?: boolean;
  isNew?: boolean;
  isAvailable: boolean;
  quantity: number;

  sku?: string;
  barcode?: string;

  attributes?: {
    [key: string]: string | number;
  };

  pictures: string[];
  videoUrls?: string[];
  gallery360?: string; // URL на 3D обертання

  rating?: number;
  reviewsCount?: number;
  reviews?: Review[];

  deliveryInfo?: DeliveryInfo;
  returnPolicy?: string;
  warranty?: string;

  relatedProducts?: string[]; // id-шники інших товарів
  upsellProducts?: string[];

  createdAt: string;
  updatedAt: string;

  metaTitle?: string;
  metaDescription?: string;
  metaKeywords?: string[];
  structuredDataJsonLd?: string;

  supplier?: string;
  warehouseLocation?: string;
  restockDate?: string;

  minOrderQuantity?: number;
  maxOrderQuantity?: number;

  // B2B / Multilingual / Advanced flags
  b2bPrice?: number;
  availableLocales?: string[];
  customFields?: Record<string, string | number | boolean>;

  // Системне
  status?: "active" | "archived" | "draft";
}

export interface Review {
  id: string;
  userId: string;
  username: string;
  rating: number;
  comment: string;
  createdAt: string;
}

export interface DeliveryInfo {
  estimatedDays: number;
  freeShipping: boolean;
  shippingPrice?: number;
  regions?: string[];
}

export interface ITestimonials {
  id: string | number;
  name: string;
  date: string;
  respond: string;
  raiting: string;
}
