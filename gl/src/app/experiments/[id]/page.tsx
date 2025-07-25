'use client';

import React, { useState, useEffect } from 'react';
import { Experiment } from '@/types/experiment';
import ExperimentDetail from '@/components/ExperimentDetail';
import ExperimentForm from '@/components/ExperimentForm';
import { useRouter } from 'next/navigation';

interface ExperimentDetailPageProps {
  params: { id: string };
}

export default function ExperimentDetailPage({ params }: ExperimentDetailPageProps) {
  const { id } = params;
  const router = useRouter();
  const [experiment, setExperiment] = useState<Experiment | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [isEditing, setIsEditing] = useState<boolean>(false);

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

    if (id) {
      fetchExperiment();
    }
  }, [id]);

  const handleUpdateExperiment = async (data: Experiment) => {
    try {
      const response = await fetch(`/api/experiments/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      alert('Experiment updated successfully!');
      setExperiment(data); // Update local state with new data
      setIsEditing(false); // Exit editing mode
    } catch (error) {
      console.error('Error updating experiment:', error);
      alert('Failed to update experiment.');
    }
  };

  if (loading) return <p>Loading experiment details...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!experiment) return <p>Experiment not found.</p>;

  return (
    <div className="p-4">
      {isEditing ? (
        <>
          <h2 className="text-xl font-bold mb-4">Edit Experiment</h2>
          <ExperimentForm initialData={experiment} onSubmit={handleUpdateExperiment} />
          <button onClick={() => setIsEditing(false)} className="mt-4 text-blue-600 hover:underline">Cancel Edit</button>
        </>
      ) : (
        <>
          <ExperimentDetail id={id} />
          <button onClick={() => setIsEditing(true)} className="mt-4 text-blue-600 hover:underline">Edit Experiment</button>
        </>
      )}
    </div>
  );
}
