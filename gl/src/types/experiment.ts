export interface Experiment {
  id: string;
  name: string;
  hypothesis: string;
  goalMetrics: string;
  targetAudience: string;
  variants: string;
  startDate: string; // Consider using Date type later for better date handling
  endDate: string; // Consider using Date type later for better date handling
  status: 'Planning' | 'Running' | 'Paused' | 'Completed' | 'Canceled';
  learnings?: string;
  nextSteps?: string;
  resultsDashboardLink?: string;
}
