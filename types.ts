
export interface Product {
  id: string;
  name: string;
  name_en?: string;
  category_id: string;
  category?: string;
  description?: string;
  description_zh?: string;
  description_en?: string;
  image: string;
  specs?: string[];
  specs_zh?: string[];
  specs_en?: string[];
}

export interface NavItem {
  label: string;
  path: string;
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}

export interface NewsItem {
  date: string;
  title: string;
  content: string;
}