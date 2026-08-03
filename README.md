# SPA_with_react_project_portfolio
online platform that displays past projects and allows to dynamically update portfolio as new work is completed.  This platform provides a seamless user experience, making it easy for potential clients or collaborators to navigate projects and learn about their details.
Portfolio Showcase
A modern, responsive Single Page Application (SPA) built with React for showcasing creative projects. This application allows users to browse, search, filter, and dynamically add projects to a personal portfolio.

Features
    • Landing Page — Grid layout displaying all projects with preview images, titles, descriptions, and technology tags
    • Dynamic Project Addition — Modal form to add new projects with validation and category selection
    • Real-time Search — Filter projects by title, description, or technology stack
    • Category Filtering — Filter by Web Development, Mobile App, UI/UX Design, or Branding
    • Detail Views — Individual project pages via client-side routing showing full descriptions and project metadata
    • Persistent Storage — Projects saved to browser localStorage so data survives page refreshes
    • Responsive Design — Optimized for mobile, tablet, and desktop screen sizes
    • Accessibility — Semantic HTML, ARIA labels, and keyboard navigation support

Tech Stack
Technology	Purpose
React 18	UI library with hooks and functional components
React Router 6	Client-side routing for SPA navigation
Context API	Global state management across components
Custom CSS	Component styling with CSS variables
Vite	Build tool and development server
Jest + React Testing Library	Unit and integration testing

# Getting Started
Prerequisites
    • Node.js version 18 or higher
    • npm (comes with Node.js)
Installation
    1. Clone the repository
    • git clone either use HTTPS OR SSH(if you have setted it up)
cd project-showcase
    2. Install dependencies
    • npm install
    3. Start the development server
    • npm run dev
    4. Open in browser Navigate to the URL shown in your terminal (typically http://localhost:3000/)

# Available Scripts
Command	Description
npm run dev	Starts the Vite development server with hot reload
npm run build	Creates an optimized production build in the dist/ folder
npm run preview	Previews the production build locally
npm test	Runs the Jest test suite
npm run test:watch	Runs tests in watch mode during development

# Project Structure
project-showcase/
├── public/                  # Static assets
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── SearchBar.jsx
│   │   ├── CategoryFilter.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── ProjectList.jsx
│   │   └── ProjectForm.jsx
│   ├── pages/               # Route-level page components
│   │   ├── HomePage.jsx
│   │   └── ProjectDetailPage.jsx
│   ├── context/             # React Context for state management
│   │   └── ProjectContext.jsx
│   ├── hooks/               # Custom React hooks
│   │   └── useLocalStorage.js
│   ├── data/                # Static seed data
│   │   └── initialProjects.js
│   ├── __tests__/           # Unit tests
│   │   ├── ProjectCard.test.jsx
│   │   ├── ProjectForm.test.jsx
│   │   └── App.test.jsx
│   ├── App.jsx              # Root component with routing
│   ├── main.jsx             # Application entry point
│   └── index.css            # Global styles and CSS variables
├── index.html               # HTML entry point
├── package.json
├── vite.config.js
├── jest.config.js
└── README.md

# Component Hierarchy
App (Router Provider)
├── Navbar
├── Routes
│   ├── HomePage
│   │   ├── SearchBar
│   │   ├── CategoryFilter
│   │   ├── ProjectList
│   │   │   └── ProjectCard (×n)
│   │   └── ProjectForm (modal overlay)
│   └── ProjectDetailPage
└── Footer

State Management
The application uses React Context API with the following global state:
State	Type	Description
projects	Array	All projects (persisted to localStorage)
searchQuery	String	Current search input value
categoryFilter	String	Active category filter ("all" or specific category)
isFormOpen	Boolean	Modal visibility toggle
Custom Hook
useLocalStorage — Syncs React state with browser localStorage for data persistence across sessions.

Design Decisions
    • CSS over Tailwind — Chose custom CSS with CSS variables for full control over the design system and easier debugging for learners
    • Context API over Redux — Sufficient for this application’s state complexity without added boilerplate
    • Client-side routing — React Router enables bookmarkable project detail pages without server configuration
    • Functional components + Hooks — Modern React patterns throughout; no class components

Known Limitations
    • External image URLs — Project images rely on external URLs; if a link breaks, a fallback gradient background is displayed
    • No backend API — Data persists only in browser localStorage; clearing browser data will reset to initial seed projects
    • No user authentication — All visitors can add and delete projects; there are no user accounts or permissions
    • No image uploads — The add-project form accepts image URLs only; direct file uploads are not supported
    • Single-user experience — localStorage is tied to the individual browser; projects are not shared across devices

Future Enhancements
    • ☐ Connect to a REST API or Firebase for persistent cloud storage
    • ☐ Add user authentication with protected routes
    • ☐ Implement drag-and-drop image uploads
    • ☐ Add project editing functionality
    • ☐ Include a dark mode toggle
    • ☐ Add animation transitions with Framer Motion

# Testing
Tests are written with Jest and React Testing Library.
Run the test suite:
npm test
Current test coverage includes: - Component rendering and prop passing - Form validation logic - User interactions (clicking, typing) - Routing behavior

# License
This project was built for educational purposes as part of a web development curriculum.

# Author
Built by Osteen Murimi as a summative lab project demonstrating React fundamentals including component architecture, state management, event handling, routing, and responsive design.