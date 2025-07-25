import React, { useEffect, useState } from 'react';
import { Experiment } from '@/types/experiment';

const ExperimentList: React.FC = () => {
  const [experiments, setExperiments] = useState<Experiment[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchExperiments = async () => {
      try {
        const response = await fetch('/api/experiments');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: Experiment[] = await response.json();
        setExperiments(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchExperiments();
  }, []);

  if (loading) return <p>Loading experiments...</p>;
  if (error) return <p>Error: {error}</p>;
  if (experiments.length === 0) return <p>No experiments found. Start by creating one!</p>;

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">All Experiments</h2>
      <ul className="divide-y divide-gray-200">
        {experiments.map((experiment) => (
          <li key={experiment.id} className="py-4 flex justify-between items-center">
            <div>
              <p className="text-lg font-medium text-gray-900">{experiment.name}</p>
              <p className="text-sm text-gray-500">Status: {experiment.status}</p>
            </div>
            {/* TODO: Add link to experiment detail page */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExperimentList;
