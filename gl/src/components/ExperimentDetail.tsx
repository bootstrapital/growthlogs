import React, { useEffect, useState } from 'react';
import { Experiment } from '@/types/experiment';

interface ExperimentDetailProps {
  id: string;
}

const ExperimentDetail: React.FC<ExperimentDetailProps> = ({ id }) => {
  const [experiment, setExperiment] = useState<Experiment | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchExperiment = async () => {
      try {
        const response = await fetch(`/api/experiments/${id}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: Experiment = await response.json();
        setExperiment(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchExperiment();
  }, [id]);

  if (loading) return <p>Loading experiment details...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!experiment) return <p>Experiment not found.</p>;

  return (
    <div className="space-y-4 p-4 bg-white shadow rounded-lg">
      <h2 className="text-2xl font-bold text-gray-900">Experiment: {experiment.name}</h2>
      <p className="text-sm text-gray-500">ID: {experiment.id}</p>
      <div>
        <h3 className="text-lg font-medium text-gray-700">Hypothesis:</h3>
        <p className="text-gray-800">{experiment.hypothesis}</p>
      </div>
      <div>
        <h3 className="text-lg font-medium text-gray-700">Goal/Metrics:</h3>
        <p className="text-gray-800">{experiment.goalMetrics}</p>
      </div>
      <div>
        <h3 className="text-lg font-medium text-gray-700">Target Audience:</h3>
        <p className="text-gray-800">{experiment.targetAudience}</p>
      </div>
      <div>
        <h3 className="text-lg font-medium text-gray-700">Variants Description:</h3>
        <p className="text-gray-800">{experiment.variants}</p>
      </div>
      <div>
        <h3 className="text-lg font-medium text-gray-700">Dates:</h3>
        <p className="text-gray-800">{experiment.startDate} to {experiment.endDate}</p>
      </div>
      <div>
        <h3 className="text-lg font-medium text-gray-700">Status:</h3>
        <p className="text-gray-800">{experiment.status}</p>
      </div>
      {experiment.learnings && (
        <div>
          <h3 className="text-lg font-medium text-gray-700">Key Learnings/Insights:</h3>
          <p className="text-gray-800">{experiment.learnings}</p>
        </div>
      )}
      {experiment.nextSteps && (
        <div>
          <h3 className="text-lg font-medium text-gray-700">Next Steps/Actionable Insights:</h3>
          <p className="text-gray-800">{experiment.nextSteps}</p>
        </div>
      )}
      {experiment.resultsDashboardLink && (
        <div>
          <h3 className="text-lg font-medium text-gray-700">Link to Data/Results Dashboard:</h3>
          <a href={experiment.resultsDashboardLink} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">
            {experiment.resultsDashboardLink}
          </a>
        </div>
      )}
    </div>
  );
};

export default ExperimentDetail;
