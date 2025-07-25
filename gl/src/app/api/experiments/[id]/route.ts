import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';
import { Experiment } from '@/types/experiment';

const experimentsFilePath = path.join(process.cwd(), 'gl/data/experiments.json');

export async function GET(request: Request, { params }: { params: { id: string } }) {
  try {
    const { id } = params;
    const fileContents = await fs.readFile(experimentsFilePath, 'utf8');
    const experiments: Experiment[] = JSON.parse(fileContents);
    const experiment = experiments.find(exp => exp.id === id);

    if (experiment) {
      return NextResponse.json(experiment);
    } else {
      return NextResponse.json({ message: 'Experiment not found' }, { status: 404 });
    }
  } catch (error) {
    console.error('Failed to retrieve experiment:', error);
    return NextResponse.json({ message: 'Failed to retrieve experiment' }, { status: 500 });
  }
}

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  try {
    const { id } = params;
    const updatedExperiment: Experiment = await request.json();

    const fileContents = await fs.readFile(experimentsFilePath, 'utf8');
    let experiments: Experiment[] = JSON.parse(fileContents);

    const index = experiments.findIndex(exp => exp.id === id);

    if (index !== -1) {
      experiments[index] = { ...updatedExperiment, id }; // Ensure ID remains the same
      await fs.writeFile(experimentsFilePath, JSON.stringify(experiments, null, 2), 'utf8');
      return NextResponse.json(experiments[index]);
    } else {
      return NextResponse.json({ message: 'Experiment not found' }, { status: 404 });
    }
  } catch (error) {
    console.error('Failed to update experiment:', error);
    return NextResponse.json({ message: 'Failed to update experiment' }, { status: 500 });
  }
}
