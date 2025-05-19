export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  videoUrl?: string;
  featured?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  testimonial: string;
  imageUrl: string;
}

export interface PricingTier {
  id: string;
  name: string;
  description: string;
  basePrice: number;
  features: string[];
  popular?: boolean;
}

export interface PricingOption {
  id: string;
  serviceId: string;
  name: string;
  price: number;
}