/**
 * Example service - contains business logic
 * In a real application, this would interact with a database
 */

// Mock data - replace with actual database queries
let examples = [
  { id: '1', title: 'Example 1', description: 'First example', createdAt: new Date() },
  { id: '2', title: 'Example 2', description: 'Second example', createdAt: new Date() },
];

export const exampleService = {
  /**
   * Get all examples
   */
  getAll: async () => {
    // Simulate async operation
    return Promise.resolve(examples);
  },

  /**
   * Get example by ID
   */
  getById: async (id) => {
    const example = examples.find((item) => item.id === id);
    return Promise.resolve(example);
  },

  /**
   * Create new example
   */
  create: async (data) => {
    const newExample = {
      id: String(examples.length + 1),
      ...data,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    examples.push(newExample);
    return Promise.resolve(newExample);
  },

  /**
   * Update example
   */
  update: async (id, data) => {
    const index = examples.findIndex((item) => item.id === id);
    if (index === -1) return null;

    examples[index] = {
      ...examples[index],
      ...data,
      updatedAt: new Date(),
    };
    return Promise.resolve(examples[index]);
  },

  /**
   * Delete example
   */
  delete: async (id) => {
    const index = examples.findIndex((item) => item.id === id);
    if (index === -1) return false;

    examples.splice(index, 1);
    return Promise.resolve(true);
  },
};

