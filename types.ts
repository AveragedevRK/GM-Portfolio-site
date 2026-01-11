export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  longDescription?: string;
  url: string;
  type: 'dashboard' | 'analysis';
}

export interface NavItem {
  label: string;
  href: string;
}
