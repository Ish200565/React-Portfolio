# Ishika Belel | React Portfolio

Hey everyone! This is my personal portfolio: [ishika-belel-portfolio.vercel.app](https://ishika-belel-portfolio.vercel.app/)

You can access it to learn more about me, my work, projects, and technical journey. Do not forget to check the **Credentials** section in the navigation bar.

## Features

- Responsive portfolio layout for desktop and mobile screens.
- Dark theme by default with an optional light-theme toggle.
- Animated terminal-inspired hero section.
- Project, experience, coding journey, contact, education, hackathon, and certification sections.
- Technology stack cards with recognizable technology logos and fallback labels.
- Animated background technology marks around the About section.
- Credentials page available at `#credentials`.
- Responsive mobile navigation menu.

## Tech Stack

- React 18
- JavaScript
- CSS3
- OGL/WebGL for the animated terminal background
- GSAP and `@gsap/react`
- React Scripts / Create React App

## Getting Started

### Prerequisites

- Node.js and npm installed on your system.

### Installation

```bash
npm install
```

### Run Locally

```bash
npm start
```

The development server opens the site at `http://localhost:3000`.

### Create a Production Build

```bash
npm run build
```

The optimized output is generated in the `build` directory.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm start` | Starts the development server. |
| `npm run build` | Creates an optimized production build. |
| `npm test` | Runs the test command in watch mode. |

## Project Structure

```text
src/
	components/       Reusable portfolio sections and UI components
	context/          Theme state management
	pages/            Standalone pages such as Credentials
	App.js            Main application composition and hash routing
	index.css         Global styles and theme variables
```

## Deployment

Deploy the generated `build` directory using a static hosting provider such as Vercel, Netlify, or GitHub Pages. Make sure the host serves `index.html` for the root path and preserves static files from the `public` directory.