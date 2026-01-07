
export interface NavItem {
  name: string;
  path: string;
}

export interface Publication {
  id: string;
  title: string;
  authors: string;
  journal: string;
  year: number;
  imageUrl: string;
  doi: string;
  isFeatured?: boolean;
}

export interface ResearchDirection {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  imageUrl: string;
  color: string;
}

export interface Equipment {
  id: string;
  name: string;
  manufacturer: string;
  specifications: string;
  status: 'Operational' | 'Maintenance' | 'In Use';
  imageUrl: string;
  category: 'Synthesis' | 'Characterization' | 'Computation';
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  category: 'Faculty' | 'Postdoc' | 'PhD' | 'Master' | 'Alumni';
  imageUrl: string;
  description?: string;
  dest?: string; // For alumni
}

export interface NewsItem {
  id: string;
  date: string;
  title: string;
  excerpt: string;
  imageUrl: string;
}
