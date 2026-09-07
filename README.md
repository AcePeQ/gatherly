# Gatherly

An app for planning group trips with friends and family — with shared tasks, participants and expenses in one place.

> **Work in progress.** The React + TypeScript frontend has been initialized with Vite. The next milestone is building the login and registration screens. The backend and the features below are planned and are not yet implemented.

## About

Trip information often gets scattered across messages, notes and checklists. Gatherly aims to help everyone see what needs to be done, who is responsible and how much has been spent.

This is a personal learning project focused on building a full-stack application step by step, understanding implementation decisions and writing the application code independently.

## Tech stack

| Layer | Technologies | Status |
| --- | --- | --- |
| Frontend | React, TypeScript, Vite | Initialized |
| Backend | Node.js, NestJS | Planned |
| Database | PostgreSQL | Planned |

Additional libraries and the database access tool will be selected as the project develops.

## MVP roadmap

- [ ] **Authentication:** registration, login and logout.
- [ ] **Trip management:** create, view, edit and delete trips; list trips the user owns or has joined.
- [ ] **Invitations:** join a trip through an invitation link after signing in; owners can invalidate the link.
- [ ] **Permissions:** trip owner and participant roles; trip data is accessible only to its members.
- [ ] **Tasks:** title, optional description and deadline, an optional assignee, and To do / Done status.
- [ ] **Expense tracking:** record the expense name, amount, date and payer in PLN.
- [ ] **Expense summary:** view the total spent and the amount paid by each participant.

### MVP boundaries

- The trip creator is its owner and can edit or delete the trip.
- All participants can create and edit tasks. Only the task author or trip owner can delete a task.
- A task can have one assignee or remain unassigned. The task list also serves as a shared checklist.
- All participants can record expenses. Only the expense author or trip owner can edit or delete an expense.
- Expenses use PLN only. Summaries show payments, not debts or repayment calculations.
- Other participants' changes can be viewed after refreshing the page; real-time updates are outside the MVP.

### MVP completion goal

Two people using separate accounts can create and join a trip, manage shared tasks and record expenses. Data persists after a refresh or a new login. Users outside the trip cannot view or modify its data.

## Future features

- Profile editing.
- Leaving trips and removing participants.
- Separate packing checklists.
- Expense splitting and settlements.
- Multiple currencies.
- Daily itinerary.
- Comments, chat and voting.
- Photos and documents.
- Maps and weather forecasts.
- Notifications and real-time updates.
- Dark mode.

## Project organization

The project is intended to use one Git repository with the following layout:

| Path | Purpose |
| --- | --- |
| `client/` | React application and its own package.json |
| `server/` | Planned NestJS API with its own package.json |
| `docs/` | Product brief, MVP scope and project notes |
| `README.md` | Project overview and setup instructions |
| `.gitignore` | Files excluded from version control |

The backend and documentation structure will be added as development progresses.

## Run the frontend locally

You need Node.js compatible with the installed Vite version and npm.

From the root of your local Gatherly project:

```bash
cd client
npm install
npm run dev
```

Open the local URL printed in the terminal.

Backend setup instructions will be added once the server is initialized. Authentication and persistent data are not available yet.

## Design direction

Horizon UI is the visual reference for the interface. Its colors, typography and component styling will guide the design, while screens will be adapted to Gatherly's requirements.

The frontend implementation is being written as part of this project.
