export type PlanType = 'free' | 'basic' | 'premium';

export interface User {
  id: string;
  name: string;
  email: string;
  plan: PlanType;
  subscribedAt?: string;
  savedCountries: string[];
  checklistProgress: Record<string, boolean>;
}

export interface VisaOption {
  type: string; // e.g. "Skilled Worker", "Student Visa", "Chancenkarte"
  title: string;
  duration: string;
  pathwayToPR: boolean;
  minDegree: string;
  ieltsScore: string;
  proofOfFundsNGN: string;
  proofOfFundsForeign: string;
  processingTime: string;
  summary: string;
}

export interface Country {
  id: string;
  name: string;
  region: 'North America' | 'Europe' | 'Oceania' | 'Asia' | 'Middle East';
  flagEmoji: string;
  badge?: string;
  popular: boolean;
  headline: string;
  officialPortalUrl: string;
  processingTimeOverview: string;
  difficulty: 'High' | 'Moderate' | 'Points-Based' | 'Accessible';
  visaOptions: VisaOption[];
  generalRequirements: string[];
  applicationSteps: string[];
  inDemandJobs: string[];
  monthlyCostOfLiving: string;
  isPremiumGated?: boolean;
}

export interface NewsUpdate {
  id: string;
  title: string;
  date: string;
  country: string;
  category: 'Policy Change' | 'Work Permit' | 'Study Visa' | 'Fee Update' | 'Opportunity';
  snippet: string;
  fullDetail: string;
  source: string;
}
