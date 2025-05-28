export interface Service {
  title: string;
  description: string;
  benefit: string;
}

export interface Testimonial {
  name: string;
  quote: string;
  result: string;
  image?: string;
}

export interface Package {
  name: string;
  price: string;
  description: string;
  features: string[];
}

export interface FAQ {
  question: string;
  answer: string;
}