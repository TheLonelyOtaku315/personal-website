// Shared interfaces for use across components
export type TimelineEventType = 'education' | 'work';

export interface TimelineEvent {
  type: TimelineEventType;
  title: string;
  organization: string;
  location?: string;
  // "YYYY-MM" or "YYYY"; a missing endDate means ongoing
  startDate: string;
  endDate?: string | null;
  summary: string;
  details: string[];
  link?: string;
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  startDate: Date | string | null;
  // null or missing means the project is still ongoing
  endDate?: Date | string | null;
  image?: string;
  demoUrl?: string;
  sourceUrl?: string;
}
