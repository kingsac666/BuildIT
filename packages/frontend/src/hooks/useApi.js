import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

/**
 * Custom hook for API queries using React Query
 */
export const useApiQuery = (key, serviceFn, options = {}) => {
  return useQuery({
    queryKey: key,
    queryFn: serviceFn,
    ...options,
  });
};

/**
 * Custom hook for API mutations using React Query
 */
export const useApiMutation = (mutationFn, options = {}) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn,
    onSuccess: (data, variables, context) => {
      // Invalidate relevant queries on success
      if (options.invalidateQueries) {
        queryClient.invalidateQueries({ queryKey: options.invalidateQueries });
      }
      options.onSuccess?.(data, variables, context);
    },
    ...options,
  });
};

