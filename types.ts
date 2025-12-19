export interface NavItem {
  label: string;
  href: string;
}

export interface Feature {
  title: string;
  description: string;
  iconName: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface PricingDetail {
  price: string;
  unit: string;
  period: string;
  features: string[];
}