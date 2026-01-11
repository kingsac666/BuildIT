import apiClient from '../config/axios';

// Example API service structure
export const healthService = {
  checkHealth: () => apiClient.get('/health'),
};

export const exampleService = {
  // Example CRUD operations
  getAll: () => apiClient.get('/examples'),
  getById: (id) => apiClient.get(`/examples/${id}`),
  create: (data) => apiClient.post('/examples', data),
  update: (id, data) => apiClient.put(`/examples/${id}`, data),
  delete: (id) => apiClient.delete(`/examples/${id}`),
};

// Export all services
export default {
  healthService,
  exampleService,
};

