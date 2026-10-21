# ACM-W IISU Website

Website for ACM-W IISU, the student chapter at IIS (Deemed to be University), Jaipur. It brings together chapter information, events, team profiles, photographs, and ways for students to connect with the community.

## Features

- Chapter overview and initiatives
- Events and event archive
- Event-based photo gallery
- Team profiles
- Community sign-up and contact information
- Responsive layouts and interactive page transitions

## Technology Stack

- React
- TypeScript
- Vite
- React Router
- Motion
- CSS

## Getting Started

### Prerequisites

Install [Node.js](https://nodejs.org/) and npm.

### Clone the repository

```bash
git clone https://github.com/rev2018/acm-w-website.git
cd acm-w-website
```

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

Vite prints the local development URL in the terminal.

## Production Build

Create an optimized production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

The generated files are written to the `dist/` directory.

## Project Structure

```text
src/
├── components/    # Reusable interface components
├── data/          # Chapter content and configuration
├── pages/         # Website pages
├── App.tsx        # Application routes
├── main.tsx       # Application entry point
└── styles.css     # Global styles and responsive layout

public/
└── assets/        # Logos, team photos, gallery images and posters
```

## Updating Chapter Content

Most chapter information is maintained in `src/data/site.ts`, including chapter details, social links, events, gallery entries, and team profiles. Static images and other assets are stored in `public/assets/`.

Before publishing updates, verify event details, registration information, and external links. Add official LinkedIn or GitHub URLs to the configuration only when the correct chapter profiles are available.

## Maintenance

After making changes, run `npm run build` to check TypeScript and create a production build before publishing the update.
