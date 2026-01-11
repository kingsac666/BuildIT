/**
 * Type definitions and interfaces
 * Note: These are JSDoc comments for better IDE support
 * Consider migrating to TypeScript for full type safety
 */

/**
 * @typedef {Object} ApiResponse
 * @property {boolean} success
 * @property {any} [data]
 * @property {string} [message]
 * @property {Error} [error]
 */

/**
 * @typedef {Object} Example
 * @property {string} id
 * @property {string} title
 * @property {string} [description]
 * @property {Date|string} createdAt
 * @property {Date|string} [updatedAt]
 */

/**
 * @typedef {Object} ErrorResponse
 * @property {boolean} success
 * @property {string} message
 * @property {Array} [errors]
 */

