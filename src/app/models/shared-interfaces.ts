// Shared interfaces for use across components
export interface TimelineEvent {
  status: string;
  date: string;
  description: string;
}

export interface Project {
  title: string;
  description: string;
  demoUrl: string;
  sourceUrl: string;
  date: Date;
  technologies: string[];
  image: string;
}
