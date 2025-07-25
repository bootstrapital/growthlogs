# SPECS: Minimal Experiment Tracking

### Feature Description
Implement the core functionality for tracking a single experiment, allowing growth practitioners to record essential details and manage its lifecycle more effectively than with a spreadsheet.

### User Stories
- **As a growth practitioner,** I want to create a new experiment record with essential details (name, hypothesis, goal, audience, variants, dates, status) so that I can centralize my experiment information.
- **As a growth practitioner,** I want to view a list of my experiments and their current status so that I can quickly understand my active and completed work.
- **As a growth practitioner,** I want to edit the details of an existing experiment so that I can keep its information up-to-date.
- **As a growth practitioner,** I want to update the status of an experiment (e.g., Planning, Running, Completed) so that I can reflect its current state.
- **As a growth practitioner,** I want to record key learnings and next steps for a completed experiment so that I can build institutional knowledge.
- **As a growth practitioner,** I want to link to external data sources or dashboards for an experiment so that I can easily access quantitative results.

### Acceptance Criteria
- The system must allow creation of an experiment with:
    - `Experiment Identifier/Name` (text, required, unique)
    - `Hypothesis` (text, required)
    - `Experiment Goal/Metric(s)` (text, required)
    - `Target Audience/Segmentation` (text, required)
    - `Variant(s) Description` (text, required)
    - `Start Date` (date, required)
    - `End Date` (date, required)
    - `Status` (dropdown: Planning, Running, Paused, Completed, Canceled, required, default: Planning)
- Users can view a list of experiments, showing at least their Name and Status.
- Users can select an experiment to view its full details.
- Users can modify any field of an existing experiment.
- Users can change the `Status` of an experiment.
- Users can add/edit `Key Learnings/Insights` (text, optional).
- Users can add/edit `Next Steps/Actionable Insights` (text, optional).
- Users can add/edit `Link to Data/Results Dashboard` (URL, optional).

---

### ✅ Technical Plan of Action
- [x] **Task 1: Project Initialization:** Initialize a new Next.js project with TypeScript.
- [x] **Task 2: Data Model Definition:** Define the TypeScript interface/type for an `Experiment` based on the essential information identified in the spec.
- [x] **Task 3: API Route - Create Experiment:** Implement a Next.js API route (`/api/experiments`) to handle `POST` requests for creating new experiment records. This will involve basic validation and saving the data (initially to a simple in-memory store or JSON file for prototyping).
- [x] **Task 4: API Route - Get All Experiments:** Implement a Next.js API route (`/api/experiments`) to handle `GET` requests for retrieving all experiment records.
- [x] **Task 5: API Route - Get Single Experiment:** Implement a Next.js API route (`/api/experiments/[id]`) to handle `GET` requests for retrieving a single experiment record by its ID.
- [x] **Task 6: API Route - Update Experiment:** Implement a Next.js API route (`/api/experiments/[id]`) to handle `PUT` requests for updating an existing experiment record.
- [x] **Task 7: Frontend - Experiment Form Component:** Create a React component for creating and editing experiment details, including input fields for all specified essential information and a dropdown for status.
- [x] **Task 8: Frontend - Experiment List Component:** Create a React component to display a list of experiments, showing at least their name and status. This component should fetch data from the "Get All Experiments" API route.
- [x] **Task 9: Frontend - Experiment Detail Component:** Create a React component to display the full details of a single experiment. This component should fetch data from the "Get Single Experiment" API route.
- [x] **Task 10: Frontend - Integration:** Integrate the form, list, and detail components into the Next.js application, setting up basic navigation.
- [x] **Task 11: Basic Styling:** Apply minimal styling to make the UI presentable and functional.
- [x] **Task 12: Local Data Persistence (Temporary):** Implement a simple way to persist data locally (e.g., using `localStorage` or a flat JSON file) for development purposes, as we won't set up a database yet.
- [x] **Task 13: Initial Testing:** Manually test the core CRUD functionalities through the UI.
