export interface Project {
  name: string;
  period: string;
  thumbnail: string;
  images?: string[];
  git: string;
  web?: string;
  account?: { id: string; password: string };
  storybook?: string;
  summary: string;
  description: string;
  role?: string;
  skills: string[];
  tags?: string[];
}

export interface EmailForm {
  name: string;
  email: string;
  message: string;
}
