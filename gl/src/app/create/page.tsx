'use client';

import ExperimentForm from '@/components/ExperimentForm';
import { Experiment } from '@/types/experiment';
import { useRouter } from 'next/navigation';

export default function CreateExperimentPage() {
  const router = useRouter();

  const handleCreateExperiment = async (data: Experiment) => {
    try {
      const response = await fetch('/api/experiments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      alert('Experiment created successfully!');
      router.push('/'); // Navigate back to the list after creation
    } catch (error) {
      console.error('Error creating experiment:', error);
      alert('Failed to create experiment.');
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Create New Experiment</h2>
      <ExperimentForm onSubmit={handleCreateExperiment} />
    </div>
  );
}
