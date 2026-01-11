/**
 * Standardized response helper functions
 */

export const sendSuccess = (res, data, message = 'Success', statusCode = 200) => {
  res.status(statusCode).json({
    success: true,
    message,
    data,
  });
};

export const sendError = (res, message = 'Error', statusCode = 500, errors = null) => {
  const response = {
    success: false,
    message,
  };

  if (errors) {
    response.errors = errors;
  }

  res.status(statusCode).json(response);
};

export const sendCreated = (res, data, message = 'Created successfully') => {
  sendSuccess(res, data, message, 201);
};

export const sendNotFound = (res, message = 'Resource not found') => {
  sendError(res, message, 404);
};

export const sendBadRequest = (res, message = 'Bad request', errors = null) => {
  sendError(res, message, 400, errors);
};

export const sendUnauthorized = (res, message = 'Unauthorized') => {
  sendError(res, message, 401);
};

export const sendForbidden = (res, message = 'Forbidden') => {
  sendError(res, message, 403);
};

export const sendServerError = (res, message = 'Internal server error') => {
  sendError(res, message, 500);
};

