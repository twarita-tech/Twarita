export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  rating: number;
  reviewCount: number;
  description: string;
  features: string[];
  inStock: boolean;
  material?: string;
  warranty?: string;
  tags: string[];
}

export interface Review {
  id: string;
  productId: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
  verified: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Order {
  id: string;
  items: CartItem[];
  total: number;
  status: 'pending' | 'packed' | 'shipped' | 'out-for-delivery' | 'delivered';
  orderDate: string;
  estimatedDelivery: string;
  shippingAddress: Address;
}

export interface Address {
  name: string;
  phone: string;
  street: string;
  city: string;
  postalCode: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  isAdmin: boolean;
}