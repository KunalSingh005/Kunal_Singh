import { LucideIcon } from 'lucide-react';

export interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  location: string;
  period: string;
  responsibilities: string[];
}

export interface SkillItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface CertificationItem {
  name: string;
  provider: string;
}