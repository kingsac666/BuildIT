# Frontend Folder Structure

This document describes the organized folder structure for the BuildIT frontend application.

## Directory Structure

```
src/
├── assets/              # Static assets (images, fonts, etc.)
├── components/          # React components
│   ├── common/         # Reusable UI components (Button, Card, Input, Modal, etc.)
│   │   ├── Button.jsx
│   │   ├── Card.jsx
│   │   └── index.js    # Barrel exports
│   └── layout/         # Layout components (Header, Footer, Sidebar, Container)
│       ├── Header.jsx
│       ├── Footer.jsx
│       └── index.js
├── config/             # Configuration files
│   ├── axios.js        # Axios instance with interceptors
│   └── queryClient.js  # React Query client configuration
├── hooks/              # Custom React hooks
│   ├── useApi.js       # API hooks using React Query
│   └── useDebounce.js  # Debounce hook
├── pages/              # Page components (routes)
│   ├── Home.jsx
│   ├── About.jsx
│   └── index.js        # Barrel exports
├── routes/             # Router configuration
│   └── AppRouter.jsx   # Main router component
├── services/           # API service functions
│   └── apiService.js   # Service functions using Axios
├── store/              # Redux store configuration
│   ├── index.js        # Store setup
│   ├── hooks.js        # Typed Redux hooks
│   └── slices/         # Redux slices
│       └── exampleSlice.js
├── types/              # Type definitions (for TypeScript migration)
│   └── index.js        # JSDoc type definitions
├── utils/              # Utility functions
│   ├── constants.js    # Application constants
│   └── helpers.js      # Helper functions
├── App.jsx             # Main App component (legacy, can be removed)
├── main.jsx            # Application entry point
└── index.css           # Global styles with Tailwind
```

## Component Organization

### Common Components (`components/common/`)
Reusable UI components that can be used throughout the application:
- `Button` - Customizable button component
- `Card` - Card container component
- Future: Input, Modal, Dropdown, Toast, etc.

### Layout Components (`components/layout/`)
Components that define the overall structure of pages:
- `Header` - Navigation header
- `Footer` - Page footer
- Future: Sidebar, Container, Layout, etc.

### Feature Components
For feature-specific components, create folders like:
- `components/features/auth/`
- `components/features/dashboard/`
- `components/features/products/`

## Services (`services/`)
API service functions organized by domain:
- Each service file exports functions for a specific resource
- Uses the configured Axios instance from `config/axios.js`
- Examples: `apiService.js`, `authService.js`, `userService.js`

## Store (`store/`)
Redux Toolkit setup:
- `store/index.js` - Main store configuration
- `store/slices/` - Individual Redux slices
- `store/hooks.js` - Typed hooks for better TypeScript support

## Pages (`pages/`)
Top-level page components that correspond to routes:
- Each page is a full component representing a route
- Pages can use components, hooks, and services

## Hooks (`hooks/`)
Custom React hooks for reusable logic:
- `useApi` - React Query hooks for API calls
- `useDebounce` - Debounce hook for search/input
- Future: `useAuth`, `useLocalStorage`, `useMediaQuery`, etc.

## Utils (`utils/`)
Helper functions and constants:
- `helpers.js` - Pure utility functions
- `constants.js` - Application-wide constants

## Best Practices

1. **Component Structure**: Keep components small and focused
2. **Barrel Exports**: Use `index.js` files for clean imports
3. **Naming Conventions**: 
   - Components: PascalCase (e.g., `Button.jsx`)
   - Utilities: camelCase (e.g., `helpers.js`)
   - Constants: UPPER_SNAKE_CASE in constants file
4. **File Organization**: Group related files together
5. **Separation of Concerns**: Keep business logic in services, not components

