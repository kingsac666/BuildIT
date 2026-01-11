import express from 'express';
import healthRoutes from './healthRoutes.js';
import exampleRoutes from './exampleRoutes.js';

const router = express.Router();

// Mount route handlers
router.use('/', healthRoutes);
router.use('/examples', exampleRoutes);

export default router;

