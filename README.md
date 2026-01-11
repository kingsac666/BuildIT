
# BuildIT Monorepo

A monorepo project with Express.js backend and Vite + React frontend.

## Project Structure

```
BuildIT/
├── packages/
│   ├── backend/       # Express.js API server
│   └── frontend/      # Vite + React application
├── package.json       # Root workspace configuration
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)

### Installation

Install all dependencies for all packages:

```bash
npm install
```

### Development

Run both backend and frontend in development mode:

```bash
npm run dev
```

Or run them separately:

```bash
# Backend only (runs on http://localhost:3001)
npm run dev:backend

# Frontend only (runs on http://localhost:3000)
npm run dev:frontend
```

### Backend Setup

The backend server runs on port 3001 by default. You can configure it by creating a `.env` file in `packages/backend/`:

```env
PORT=3001
NODE_ENV=development
```

Copy the example file:
```bash
cp packages/backend/.env.example packages/backend/.env
```

### Frontend Setup

The frontend runs on port 3000 and is configured to proxy API requests to the backend. The Vite dev server automatically handles the proxy configuration.

### Build

Build all packages:

```bash
npm run build
```

## Available Scripts

### Root Level

- `npm run dev` - Run all packages in development mode
- `npm run dev:backend` - Run only backend
- `npm run dev:frontend` - Run only frontend
- `npm run build` - Build all packages

### Backend (`packages/backend`)

- `npm run dev` - Start development server with watch mode
- `npm start` - Start production server

### Frontend (`packages/frontend`)

- `npm run dev` - Start Vite dev server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Frontend Dependencies

The frontend includes the following dependencies:

- **Tailwind CSS** - Utility-first CSS framework
- **React Router DOM** - Client-side routing
- **Redux Toolkit** - State management
- **TanStack Query (React Query)** - Data fetching and caching (Redis-like behavior)
- **Axios** - HTTP client for API requests

## Frontend Structure

The frontend follows an organized folder structure:

```
src/
├── assets/          # Static assets
├── components/      # React components (common, layout, features)
├── config/          # Configuration (axios, queryClient)
├── hooks/           # Custom React hooks
├── pages/           # Page components (routes)
├── routes/          # Router configuration
├── services/        # API service functions
├── store/           # Redux store and slices
├── types/           # Type definitions
└── utils/           # Utility functions and constants
```

See `packages/frontend/STRUCTURE.md` for detailed documentation.

## Backend Structure

The backend follows an organized MVC-style folder structure:

```
src/
├── config/          # Configuration (env vars, settings)
├── controllers/     # Request handlers
├── middleware/      # Custom middleware (error, auth, validation)
├── models/          # Database models (placeholder)
├── routes/          # Route definitions
├── services/        # Business logic layer
├── types/           # Type definitions
├── utils/           # Utilities (logger, response, helpers)
├── validators/      # Validation schemas
└── app.js           # Express app configuration
```

See `packages/backend/STRUCTURE.md` for detailed documentation.

## Backend Dependencies

The backend includes the following dependencies:

- **express-validator** - Request validation
- **helmet** - Security headers middleware
- **morgan** - HTTP request logger
- **compression** - Response compression
- **express-rate-limit** - Rate limiting middleware

## Features

### Backend
- ✅ Monorepo setup with npm workspaces
- ✅ Express.js backend with organized MVC structure
- ✅ Security middleware (Helmet, CORS, Rate Limiting)
- ✅ Request validation with express-validator
- ✅ Global error handling middleware
- ✅ Async handler wrapper for error catching
- ✅ Standardized response helpers
- ✅ Custom logger utility
- ✅ Organized routes, controllers, and services
- ✅ ES modules (ESM) support
- ✅ Environment variable configuration

### Frontend
- ✅ Vite + React with hot module replacement
- ✅ Tailwind CSS for styling
- ✅ React Router for navigation
- ✅ Redux Toolkit for state management
- ✅ TanStack Query for data fetching and caching
- ✅ Axios with interceptors for API calls
- ✅ Organized folder structure for scalability
- ✅ Reusable components (Button, Card, Header, Footer)
- ✅ Custom hooks (useApi, useDebounce)
- ✅ API proxy configuration for seamless development

## License


