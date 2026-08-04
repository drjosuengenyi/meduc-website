export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  imageAlt: string;
  email?: string;
}

export interface EquipeContent {
  title: string;
  subtitle: string;
  members: TeamMember[];
}

export interface Partner {
  id: string;
  name: string;
  description: string;
  logo: string;
  logoAlt: string;
  url?: string;
}

export interface PartenairesContent {
  title: string;
  subtitle: string;
  partners: Partner[];
}
