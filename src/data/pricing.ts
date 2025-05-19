import { PricingTier, PricingOption } from '../types';

export const pricingTiers: PricingTier[] = [
  {
    id: 'basic',
    name: 'Essential',
    description: 'Perfect for small businesses and individual projects',
    basePrice: 499,
    features: [
      'Professional photography',
      'Basic editing',
      'Digital delivery',
      '1 revision round',
      '24-hour turnaround'
    ],
  },
  {
    id: 'premium',
    name: 'Professional',
    description: 'Comprehensive coverage for growing businesses',
    basePrice: 999,
    features: [
      'Photography & videography',
      'Advanced editing',
      'Social media formats',
      '3 revision rounds',
      'Express 12-hour turnaround',
      'Basic SEO optimization'
    ],
    popular: true,
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    description: 'Full-service solution for larger organizations',
    basePrice: 2499,
    features: [
      'Complete media package',
      'Premium editing & effects',
      'All digital formats',
      'Unlimited revisions',
      'Same-day delivery option',
      'Advanced SEO optimization',
      'Dedicated account manager'
    ],
  }
];

export const pricingOptions: PricingOption[] = [
  {
    id: 'wedding-basic',
    serviceId: 'wedding',
    name: 'Half-day coverage',
    price: 1499
  },
  {
    id: 'wedding-premium',
    serviceId: 'wedding',
    name: 'Full-day coverage',
    price: 2499
  },
  {
    id: 'event-basic',
    serviceId: 'event',
    name: '4-hour event',
    price: 899
  },
  {
    id: 'event-premium',
    serviceId: 'event',
    name: 'Full event coverage',
    price: 1699
  },
  {
    id: 'restaurant-basic',
    serviceId: 'restaurant',
    name: 'Menu photography',
    price: 599
  },
  {
    id: 'restaurant-premium',
    serviceId: 'restaurant',
    name: 'Full venue + menu',
    price: 1299
  },
  {
    id: 'product-basic',
    serviceId: 'product',
    name: 'Up to 10 products',
    price: 499
  },
  {
    id: 'product-premium',
    serviceId: 'product',
    name: 'Up to 25 products',
    price: 1099
  }
];