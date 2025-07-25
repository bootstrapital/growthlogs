import React, { useState, useEffect } from 'react';
import { Experiment } from '@/types/experiment';

interface ExperimentFormProps {
  initialData?: Experiment;
  onSubmit: (data: Experiment) => void;
}

const ExperimentForm: React.FC<ExperimentFormProps> = ({ initialData, onSubmit }) => {
  const [formData, setFormData] = useState<Experiment>(initialData || {
    id: '',
    name: '',
    hypothesis: '',
    goalMetrics: '',
    targetAudience: '',
    variants: '',
    startDate: '',
    endDate: '',
    status: 'Planning',
    learnings: '',
    nextSteps: '',
    resultsDashboardLink: '',
  });

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    }
  }, [initialData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 bg-white shadow rounded-lg">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Experiment Name</label>
        <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} required
               className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
      </div>
      <div>
        <label htmlFor="hypothesis" className="block text-sm font-medium text-gray-700">Hypothesis</label>
        <textarea name="hypothesis" id="hypothesis" value={formData.hypothesis} onChange={handleChange} required rows={3}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"></textarea>
      </div>
      <div>
        <label htmlFor="goalMetrics" className="block text-sm font-medium text-gray-700">Goal/Metrics</label>
        <input type="text" name="goalMetrics" id="goalMetrics" value={formData.goalMetrics} onChange={handleChange} required
               className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
      </div>
      <div>
        <label htmlFor="targetAudience" className="block text-sm font-medium text-gray-700">Target Audience</label>
        <input type="text" name="targetAudience" id="targetAudience" value={formData.targetAudience} onChange={handleChange} required
               className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
      </div>
      <div>
        <label htmlFor="variants" className="block text-sm font-medium text-gray-700">Variants Description</label>
        <textarea name="variants" id="variants" value={formData.variants} onChange={handleChange} required rows={3}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"></textarea>
      </div>
      <div>
        <label htmlFor="startDate" className="block text-sm font-medium text-gray-700">Start Date</label>
        <input type="date" name="startDate" id="startDate" value={formData.startDate} onChange={handleChange} required
               className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
      </div>
      <div>
        <label htmlFor="endDate" className="block text-sm font-medium text-gray-700">End Date</label>
        <input type="date" name="endDate" id="endDate" value={formData.endDate} onChange={handleChange} required
               className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
      </div>
      <div>
        <label htmlFor="status" className="block text-sm font-medium text-gray-700">Status</label>
        <select name="status" id="status" value={formData.status} onChange={handleChange} required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
          <option value="Planning">Planning</option>
          <option value="Running">Running</option>
          <option value="Paused">Paused</option>
          <option value="Completed">Completed</option>
          <option value="Canceled">Canceled</option>
        </select>
      </div>
      <div>
        <label htmlFor="learnings" className="block text-sm font-medium text-gray-700">Key Learnings/Insights</label>
        <textarea name="learnings" id="learnings" value={formData.learnings} onChange={handleChange} rows={3}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"></textarea>
      </div>
      <div>
        <label htmlFor="nextSteps" className="block text-sm font-medium text-gray-700">Next Steps/Actionable Insights</label>
        <textarea name="nextSteps" id="nextSteps" value={formData.nextSteps} onChange={handleChange} rows={3}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"></textarea>
      </div>
      <div>
        <label htmlFor="resultsDashboardLink" className="block text-sm font-medium text-gray-700">Link to Data/Results Dashboard</label>
        <input type="url" name="resultsDashboardLink" id="resultsDashboardLink" value={formData.resultsDashboardLink} onChange={handleChange}
               className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
      </div>
      <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
        Save Experiment
      </button>
    </form>
  );
};

export default ExperimentForm;
