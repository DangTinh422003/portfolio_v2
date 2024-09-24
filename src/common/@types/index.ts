export interface Project {
  id: string;
  name: string;
  thumbnail: string;
  images: string[];
  desc: string;
  created_at: string;
  role: string;
  frontend_techs: string[];
  backend_techs: string[];
  tags: string[];
  demo?: string;
  source?: string;
}
