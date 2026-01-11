# Backend Folder Structure

This document describes the organized folder structure for the BuildIT backend application.

## Directory Structure

```
src/
├── config/              # Configuration files
│   └── index.js        # Main configuration (env vars, settings)
├── controllers/         # Request handlers (business logic entry points)
│   ├── healthController.js
│   ├── exampleController.js
│   └── index.js        # Barrel exports
├── middleware/          # Custom middleware functions
│   ├── errorHandler.js # Global error handling
│   ├── asyncHandler.js # Async wrapper for error catching
│   ├── validation.js   # Validation middleware
│   ├── auth.js         # Authentication & authorization
│   └── index.js        # Barrel exports
├── models/             # Database models (ORM/ODM)
│   └── .gitkeep        # Placeholder for models
├── routes/             # Route definitions
│   ├── healthRoutes.js
│   ├── exampleRoutes.js
│   └── index.js        # Main router
├── services/           # Business logic layer
│   ├── exampleService.js
│   └── index.js        # Barrel exports
├── types/              # Type definitions (for TypeScript migration)
│   └── index.js        # JSDoc type definitions
├── utils/              # Utility functions
│   ├── logger.js       # Custom logger
│   ├── response.js     # Standardized response helpers
│   ├── constants.js    # Application constants
│   ├── helpers.js      # Helper functions
│   └── index.js        # Barrel exports
├── validators/         # Validation schemas
│   └── exampleValidator.js
└── app.js              # Express app configuration
server.js                # Application entry point
```

## Component Organization

### Controllers (`controllers/`)
Request handlers that process HTTP requests and responses:
- Receive request data
- Call appropriate services
- Send formatted responses
- Use `asyncHandler` wrapper to catch errors automatically

### Services (`services/`)
Business logic layer - separates concerns from controllers:
- Contains all business logic
- Interacts with models/database
- Can be reused across different controllers
- Returns data (not HTTP responses)

### Routes (`routes/`)
Route definitions organized by resource:
- Define URL patterns
- Map routes to controllers
- Include validation middleware
- Define HTTP methods (GET, POST, PUT, DELETE)

### Middleware (`middleware/`)
Custom middleware functions:
- **errorHandler**: Global error handling
- **asyncHandler**: Wrapper for async route handlers
- **validation**: Validates request data
- **auth**: Authentication and authorization (placeholder)

### Validators (`validators/`)
Express-validator schemas organized by resource:
- Reusable validation rules
- Separated from routes for cleaner code

### Utils (`utils/`)
Utility functions and helpers:
- **logger**: Custom logging utility
- **response**: Standardized response helpers
- **constants**: Application-wide constants
- **helpers**: Pure utility functions

### Config (`config/`)
Configuration files:
- Environment variables
- App settings (CORS, rate limiting, etc.)
- Database configuration (when needed)

### Models (`models/`)
Database models (placeholder for future use):
- ORM models (Sequelize, TypeORM, etc.)
- ODM models (Mongoose, etc.)
- Prisma schemas

## Request Flow

```
Request → Middleware (CORS, Auth, etc.) 
       → Route (validation) 
       → Controller (request handling)
       → Service (business logic)
       → Model/Database (data access)
       → Service (process data)
       → Controller (format response)
       → Response
```

## Best Practices

1. **Separation of Concerns**: 
   - Controllers handle HTTP, services handle business logic
   - Keep routes thin, move logic to services

2. **Error Handling**:
   - Use `asyncHandler` wrapper for async controllers
   - Use global error handler middleware
   - Always return standardized error responses

3. **Validation**:
   - Validate all input data
   - Use express-validator for route validation
   - Keep validation rules in validators folder

4. **Security**:
   - Use Helmet for security headers
   - Implement rate limiting
   - Validate and sanitize all inputs
   - Use CORS properly

5. **Logging**:
   - Log important events and errors
   - Use structured logging
   - Don't log sensitive information

6. **Response Format**:
   - Use standardized response helpers
   - Always include success status
   - Consistent error message format

7. **Naming Conventions**:
   - Files: camelCase (e.g., `healthController.js`)
   - Functions: camelCase (e.g., `getHealth`)
   - Constants: UPPER_SNAKE_CASE (in constants file)
   - Routes: kebab-case (e.g., `/api/health-check`)

## Dependencies

### Production
- **express**: Web framework
- **cors**: CORS middleware
- **helmet**: Security headers
- **morgan**: HTTP request logger
- **compression**: Response compression
- **express-rate-limit**: Rate limiting
- **express-validator**: Request validation
- **dotenv**: Environment variables

### Development
- **nodemon**: Auto-restart on file changes

