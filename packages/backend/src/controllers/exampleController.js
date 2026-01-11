import { asyncHandler } from '../middleware/asyncHandler.js';
import { exampleService } from '../services/exampleService.js';

/**
 * Example controller - demonstrates CRUD operations
 */

export const getExamples = asyncHandler(async (req, res) => {
  const examples = await exampleService.getAll();
  
  res.json({
    success: true,
    data: examples,
  });
});

export const getExampleById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const example = await exampleService.getById(id);
  
  if (!example) {
    return res.status(404).json({
      success: false,
      error: { message: 'Example not found' },
    });
  }
  
  res.json({
    success: true,
    data: example,
  });
});

export const createExample = asyncHandler(async (req, res) => {
  const example = await exampleService.create(req.body);
  
  res.status(201).json({
    success: true,
    data: example,
  });
});

export const updateExample = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const example = await exampleService.update(id, req.body);
  
  if (!example) {
    return res.status(404).json({
      success: false,
      error: { message: 'Example not found' },
    });
  }
  
  res.json({
    success: true,
    data: example,
  });
});

export const deleteExample = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const deleted = await exampleService.delete(id);
  
  if (!deleted) {
    return res.status(404).json({
      success: false,
      error: { message: 'Example not found' },
    });
  }
  
  res.json({
    success: true,
    message: 'Example deleted successfully',
  });
});

