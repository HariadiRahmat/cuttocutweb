export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  details: string[];
  iconName: string; // Dynamic icon mapper
}

export interface PortfolioItem {
  id: string;
  category: string;
  title: string;
  client: string;
  description: string;
  imageAlt: string;
  features: string[];
  results: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  description: string;
  monthlyPrice: number;
  annualPrice: number;
  features: string[];
  ctaText: string;
  popular: boolean;
  isLifetime?: boolean;
  lifetimePrice?: number;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  coffeeShop: string;
  comment: string;
  rating: number;
  avatar: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}
