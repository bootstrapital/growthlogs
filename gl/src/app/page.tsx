'use client';

import React, { useState } from 'react';
import ExperimentForm from '@/components/ExperimentForm';
import ExperimentList from '@/components/ExperimentList';
import ExperimentDetail from '@/components/ExperimentDetail';
import { Experiment } from '@/types/experiment';

export default function Home() {
  const [view, setView] = useState<'list' | 'create' | 'detail'>('list');
  const [selectedExperimentId, setSelectedExperimentId] = useState<string | null>(null);

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
      setView('list'); // Go back to list after creation
    } catch (error) {
      console.error('Error creating experiment:', error);
      alert('Failed to create experiment.');
    }
  };

  const handleViewDetail = (id: string) => {
    setSelectedExperimentId(id);
    setView('detail');
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8 text-gray-800">
      <nav className="mb-8">
        <ul className="flex space-x-4">
          <li>
            <button onClick={() => setView('list')} className="text-blue-600 hover:underline">View All Experiments</button>
          </li>
          <li>
            <button onClick={() => setView('create')} className="text-blue-600 hover:underline">Create New Experiment</button>
          </li>
        </ul>
      </nav>

      <main>
        {view === 'list' && <ExperimentList />}
        {view === 'create' && <ExperimentForm onSubmit={handleCreateExperiment} />}
        {view === 'detail' && selectedExperimentId && <ExperimentDetail id={selectedExperimentId} />}
      </main>
    </div>
  );
}

