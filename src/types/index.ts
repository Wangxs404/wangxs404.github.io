// 社交媒体链接
export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

// 个人信息
export interface PersonalInfo {
  name: string;
  title: string;
  location: string;
  description: string;
  avatar: string;
  social: SocialLink[];
}

// 研究领域
export interface ResearchArea {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  icon: string;
}

// 产品信息
export interface Product {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  link?: string;
  image?: string;
  status: 'active' | 'development' | 'archived';
}

// 学术成果
export interface Publication {
  id: string;
  title: string;
  authors: string[];
  journal: string;
  year: number;
  type: 'journal' | 'patent' | 'software';
  link?: string;
}

// 技能
export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'tools' | 'research';
  level: number; // 1-5
}

// 获奖经历
export interface Award {
  id: string;
  title: string;
  organization: string;
  year: number;
  description: string;
}

// 导航菜单项
export interface NavItem {
  name: string;
  path: string;
  icon?: string;
}