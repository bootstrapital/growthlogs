## Overview
Here are some general guidelines regarding the stack:
* **Frontend:** Use Svelte 5 and the latest Sveltekit.
* **CSS Import:** The main CSS file (`src/app.css`) **MUST** use `@import "tailwindcss";` to include Tailwind's styles.
* **Tailwind CSS v4:** You **MUST** use Tailwind CSS v4 utility classes for all styling.
* **Backend:** Use [Convex](https://docs.convex.dev/llms.txt) for the db and backend.

-----

## What we're building

# **GrowthLogs**
A microsaas for growth teams to manage their growth experimentation process.

## Features

### Idea Management
This set of features focuses on generating and managing ideas.

* **Brainstorm Boards:** A virtual space for teams to generate and collaborate on ideas.
* **Backlog Management:** A system to organize and store ideas that are not currently being worked on.
* **Goal Templates:** Pre-defined templates to structure and standardize goals.
* **Idea Tags:** The ability to tag ideas with keywords for easy filtering and reference.
* **File Attachments & Hypotheses:** Allow users to attach files and formulate hypotheses for each idea.
* **Goal Prioritization:** A feature to rank and prioritize goals based on their importance.

### Prioritization and Scoring
These features are centered around evaluating and ranking ideas.

* **Customizable Criteria:** Allow users to define their own criteria for scoring and ranking ideas.
* **Scoring Templates:** Provide pre-built scoring models like PIE (Potential, Importance, Ease), ICE (Impact, Confidence, Ease), and BRASS (Business Relevance, Answerability, Scope, Significance).
* **Filtering & Sorting:** Enable users to filter and sort ideas based on their scores.
* **Objective Linking:** The ability to link ideas and goals to strategic objectives.
* **Scoring History:** Track the history of scores for each idea to see how it has evolved.
* **QuickScoring-Mode:** A simplified interface for quickly scoring a large number of ideas.
* **Visual Scoring:** Represent scores and rankings visually, for example, with charts or graphs.

### Experimentation
This functionality is focused on designing and running experiments to test ideas.

* **Experiment Templates:** Pre-defined templates for designing and documenting experiments.
* **Hypothesis Templates:** Standardized templates for formulating and documenting hypotheses.
* **Metrics Tracking:** The ability to define and track key metrics and set targets for each experiment.
* **A/B Test Visualization:** Tools to visualize and compare the results of A/B tests.
* **Resource Linking:** Allow users to link to relevant documents and resources for each experiment.
* **Customizable Tags:** Use tags to categorize and organize experiments.

### Task Management & Workflow
These features are designed to help teams manage their work and streamline their workflow.

* **Task Assignment:** The ability to assign tasks to team members.
* **Subtask Creation:** Allow users to break down larger tasks into smaller, more manageable subtasks.
* **Roadmap Planning:** Tools for creating and visualizing product roadmaps, either per experiment or per person.
* **Task Templates:** Pre-defined templates for common tasks to save time and ensure consistency.

### Knowledge Management & Scaling
This set of features is focused on capturing, sharing, and scaling knowledge gained from experiments.

* **Searchable Results:** A searchable repository of all experiment results and learnings.
* **Outcome Documentation:** A structured way to document the outcomes and conclusions of each experiment.
* **Conclusion Templates:** Pre-defined templates for writing up experiment conclusions.
* **Linking Future Experiments:** The ability to link new experiments to past ones to build on previous learnings.
* **Full Version History:** Track the complete history of changes to experiments and ideas.
* **Next Steps Management:** A feature to define and manage the next steps after an experiment is completed.
* **Insight Tagging:** Tag every insight with relevant keywords for easy discovery and retrieval.
