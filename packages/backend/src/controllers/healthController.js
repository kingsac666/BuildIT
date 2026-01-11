import { asyncHandler } from '../middleware/asyncHandler.js';

/**
 * Health check controller
 */
export const getHealth = asyncHandler(async (req, res) => {
  res.json({
    success: true,
    status: 'OK',
    message: 'Backend is running!',
    timestamp: new Date().toISOString(),
  });
});

export const getApiInfo = asyncHandler(async (req, res) => {
  res.json({
    success: true,
    message: 'Welcome to BuildIT API',
    version: '1.0.0',
    endpoints: {
      health: '/api/health',
      examples: '/api/examples',
    },
  });
});

