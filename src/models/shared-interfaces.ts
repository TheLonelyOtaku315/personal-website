// Shared interfaces for use across components
export type TimelineEventType = 'education' | 'work' | 'award';

export interface TimelineEvent {
  type: TimelineEventType;
  title: string;
  organization: string;
  location?: string;
  // "YYYY-MM-DD", "YYYY-MM" or "YYYY"; a missing endDate means ongoing,
  // and an endDate equal to startDate is shown as a single date
  startDate: string;
  endDate?: string | null;
  summary: string;
  details: string[];
  link?: string;
  // Path to a certificate PDF in assets/doc (e.g. for an award)
  certificate?: string;
  // Title of a related project in the Projects section (e.g. a hackathon's)
  project?: string;
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  startDate: Date | string | null;
  // null or missing means the project is still ongoing
  endDate?: Date | string | null;
  // Screenshots for the project dialog's gallery; the first one is also
  // the hover preview. Without any, a preview is derived from the links.
  images?: string[];
  demoUrl?: string;
  sourceUrl?: string;
  // Demo video (e.g. YouTube), shown next to the demo and source links
  videoUrl?: string;
}
