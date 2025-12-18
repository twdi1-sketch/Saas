export interface NavItem {
  label: string;
  href: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: React.ComponentType<any>;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}
