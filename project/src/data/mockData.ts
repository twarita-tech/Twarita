import { Product, Review, Order } from '../types';

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Premium Wireless Headphones',
    price: 299.99,
    originalPrice: 399.99,
    image: 'https://images.pexels.com/photos/3394658/pexels-photo-3394658.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Electronics',
    rating: 4.8,
    reviewCount: 234,
    description: 'High-quality wireless headphones with active noise cancellation and premium sound quality.',
    features: ['Active Noise Cancellation', '30-hour battery life', 'Premium drivers', 'Comfortable fit'],
    inStock: true,
    material: 'Premium plastic and metal',
    warranty: '2 years',
    tags: ['wireless', 'noise-cancelling', 'premium']
  },
  {
    id: '2',
    name: 'Smart Fitness Watch',
    price: 249.99,
    image: 'https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Electronics',
    rating: 4.6,
    reviewCount: 189,
    description: 'Advanced fitness tracking with heart rate monitoring, GPS, and smartphone integration.',
    features: ['Heart rate monitoring', 'GPS tracking', '7-day battery', 'Waterproof'],
    inStock: true,
    material: 'Aluminum and silicone',
    warranty: '1 year',
    tags: ['fitness', 'smart', 'waterproof']
  },
  {
    id: '3',
    name: 'Organic Cotton T-Shirt',
    price: 29.99,
    originalPrice: 39.99,
    image: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Clothing',
    rating: 4.4,
    reviewCount: 67,
    description: 'Comfortable organic cotton t-shirt with a modern fit and sustainable materials.',
    features: ['100% organic cotton', 'Modern fit', 'Sustainable', 'Machine washable'],
    inStock: true,
    material: 'Organic cotton',
    warranty: '6 months',
    tags: ['organic', 'sustainable', 'comfort']
  },
  {
    id: '4',
    name: 'Professional Chef Knife',
    price: 89.99,
    image: 'https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Kitchen',
    rating: 4.9,
    reviewCount: 156,
    description: 'High-carbon steel chef knife with ergonomic handle, perfect for professional and home use.',
    features: ['High-carbon steel', 'Ergonomic handle', 'Sharp edge retention', 'Easy maintenance'],
    inStock: true,
    material: 'High-carbon steel',
    warranty: '5 years',
    tags: ['professional', 'sharp', 'durable']
  },
  {
    id: '5',
    name: 'Luxury Leather Bag',
    price: 199.99,
    image: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Fashion',
    rating: 4.7,
    reviewCount: 98,
    description: 'Handcrafted genuine leather bag with multiple compartments and timeless design.',
    features: ['Genuine leather', 'Multiple compartments', 'Handcrafted', 'Timeless design'],
    inStock: true,
    material: 'Genuine leather',
    warranty: '3 years',
    tags: ['luxury', 'handcrafted', 'leather']
  },
  {
    id: '6',
    name: 'Wireless Bluetooth Speaker',
    price: 79.99,
    originalPrice: 99.99,
    image: 'https://images.pexels.com/photos/2091383/pexels-photo-2091383.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Electronics',
    rating: 4.5,
    reviewCount: 123,
    description: 'Portable Bluetooth speaker with rich sound quality and long-lasting battery.',
    features: ['Rich bass', '12-hour battery', 'Water resistant', 'Compact design'],
    inStock: false,
    material: 'Durable fabric and plastic',
    warranty: '1 year',
    tags: ['wireless', 'portable', 'water-resistant']
  }
];

export const mockReviews: Review[] = [
  {
    id: '1',
    productId: '1',
    userName: 'Sarah Johnson',
    rating: 5,
    comment: 'Amazing sound quality and the noise cancellation works perfectly!',
    date: '2024-01-15',
    verified: true
  },
  {
    id: '2',
    productId: '1',
    userName: 'Mike Chen',
    rating: 4,
    comment: 'Great headphones, very comfortable for long listening sessions.',
    date: '2024-01-10',
    verified: true
  },
  {
    id: '3',
    productId: '2',
    userName: 'Emma Davis',
    rating: 5,
    comment: 'Perfect for tracking my workouts. Battery life is excellent!',
    date: '2024-01-12',
    verified: true
  }
];

export const categories = [
  'All',
  'Electronics',
  'Clothing',
  'Kitchen',
  'Fashion',
  'Sports',
  'Home'
];

export const mockOrders: Order[] = [
  {
    id: 'ORD-001',
    items: [
      { product: mockProducts[0], quantity: 1 },
      { product: mockProducts[2], quantity: 2 }
    ],
    total: 359.97,
    status: 'shipped',
    orderDate: '2024-01-10',
    estimatedDelivery: '2024-01-15',
    shippingAddress: {
      name: 'John Doe',
      phone: '+1234567890',
      street: '123 Main St',
      city: 'New York',
      postalCode: '10001'
    }
  }
];