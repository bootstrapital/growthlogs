import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import { Experiment } from "@/types/experiment";

const experimentsFilePath = path.join(process.cwd(), "data/experiments.json");

export async function GET() {
  try {
    const fileContents = await fs.readFile(experimentsFilePath, "utf8");
    const experiments: Experiment[] = JSON.parse(fileContents);
    return NextResponse.json(experiments);
  } catch (error) {
    console.error("Failed to retrieve experiments:", error);
    return NextResponse.json(
      { message: "Failed to retrieve experiments" },
      { status: 500 },
    );
  }
}

export async function POST(request: Request) {
  try {
    const newExperiment: Experiment = await request.json();

    // Generate a simple unique ID (for now)
    newExperiment.id = Date.now().toString();

    const fileContents = await fs.readFile(experimentsFilePath, "utf8");
    const experiments: Experiment[] = JSON.parse(fileContents);

    experiments.push(newExperiment);

    await fs.writeFile(
      experimentsFilePath,
      JSON.stringify(experiments, null, 2),
      "utf8",
    );

    return NextResponse.json(newExperiment, { status: 201 });
  } catch (error) {
    console.error("Failed to create experiment:", error);
    return NextResponse.json(
      { message: "Failed to create experiment" },
      { status: 500 },
    );
  }
}
