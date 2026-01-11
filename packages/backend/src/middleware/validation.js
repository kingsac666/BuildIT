import { validationResult } from 'express-validator';

/**
 * Middleware to check validation results
 * Should be called after express-validator rules
 */
export const validate = (req, res, next) => {
  const errors = validationResult(req);
  
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      errors: errors.array(),
    });
  }
  
  next();
};

