export interface Project {
  name: string;
  icon: string;
  images?: string[];
  git: string;
  web?: string;
  description: string;
  skills: string[];
}

export interface EmailForm {
  name: string;
  email: string;
  message: string;
}
