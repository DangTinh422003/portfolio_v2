export interface Project {
  id: string;
  name: string;
  thumbnail: string;
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
