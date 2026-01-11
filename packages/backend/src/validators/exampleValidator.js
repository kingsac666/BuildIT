import { body, param, query } from 'express-validator';

/**
 * Validation rules for example routes
 */

export const createExampleValidator = [
  body('title')
    .notEmpty()
    .withMessage('Title is required')
    .isLength({ min: 3, max: 100 })
    .withMessage('Title must be between 3 and 100 characters'),
  body('description')
    .optional()
    .isString()
    .withMessage('Description must be a string')
    .isLength({ max: 500 })
    .withMessage('Description must not exceed 500 characters'),
];

export const updateExampleValidator = [
  param('id').notEmpty().withMessage('ID is required'),
  body('title')
    .optional()
    .isLength({ min: 3, max: 100 })
    .withMessage('Title must be between 3 and 100 characters'),
  body('description')
    .optional()
    .isString()
    .withMessage('Description must be a string')
    .isLength({ max: 500 })
    .withMessage('Description must not exceed 500 characters'),
];

export const getExampleByIdValidator = [
  param('id').notEmpty().withMessage('ID is required'),
];

export const deleteExampleValidator = [
  param('id').notEmpty().withMessage('ID is required'),
];

