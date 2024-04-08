export interface Project {
  name: string;
  images: string[];
  desc: string;
  created_at: string;
  role: string;
  frontend_tech: string[];
  backend_tech: string[];
  tags: string[];
  demo?: string;
  source?: string;
}
