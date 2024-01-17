import { useQueryClient } from '@tanstack/react-query';

/**
 * @see https://tanstack.com/query/latest/docs/react/guides/prefetching#prefetch-in-components
 */
export function usePrefetchQuery(...args) {
  const queryClient = useQueryClient();

  queryClient.ensureQueryData(...args);
}
