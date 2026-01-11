import express from 'express';
import { getHealth, getApiInfo } from '../controllers/healthController.js';

const router = express.Router();

/**
 * @route   GET /api/health
 * @desc    Health check endpoint
 * @access  Public
 */
router.get('/health', getHealth);

/**
 * @route   GET /api
 * @desc    API information endpoint
 * @access  Public
 */
router.get('/', getApiInfo);

export default router;

