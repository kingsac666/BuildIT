import express from 'express';
import {
  getExamples,
  getExampleById,
  createExample,
  updateExample,
  deleteExample,
} from '../controllers/exampleController.js';
import { validate } from '../middleware/validation.js';
import {
  createExampleValidator,
  updateExampleValidator,
  getExampleByIdValidator,
  deleteExampleValidator,
} from '../validators/exampleValidator.js';

const router = express.Router();

/**
 * @route   GET /api/examples
 * @desc    Get all examples
 * @access  Public
 */
router.get('/', getExamples);

/**
 * @route   GET /api/examples/:id
 * @desc    Get example by ID
 * @access  Public
 */
router.get('/:id', getExampleByIdValidator, validate, getExampleById);

/**
 * @route   POST /api/examples
 * @desc    Create new example
 * @access  Public
 */
router.post('/', createExampleValidator, validate, createExample);

/**
 * @route   PUT /api/examples/:id
 * @desc    Update example
 * @access  Public
 */
router.put('/:id', updateExampleValidator, validate, updateExample);

/**
 * @route   DELETE /api/examples/:id
 * @desc    Delete example
 * @access  Public
 */
router.delete('/:id', deleteExampleValidator, validate, deleteExample);

export default router;

