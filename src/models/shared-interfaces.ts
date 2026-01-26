// Shared interfaces for use across components
export interface TimelineEvent {
  status: string;
  date: string;
  description: string;
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  startDate: Date | string;
  endDate?: Date | string | null;
  image?: string;
  demoUrl?: string;
  sourceUrl?: string;
}
