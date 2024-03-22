export interface Project {
  name: string;
  thumbnail: string;
  images?: string[];
  git: string;
  web?: string;
  account?: { id: string; password: string };
  storybook?: string;
  summary: string;
  description: string;
  skills: string[];
}

export interface EmailForm {
  name: string;
  email: string;
  message: string;
}
