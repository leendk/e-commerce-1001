import { useQuery } from '@tanstack/react-query';
import { productsApi } from '../../../../../shared/services/api';

export const useCategories = () => {
  return useQuery({
    queryKey: ['categories'],
    queryFn: () => productsApi.getCategories(),
    staleTime: 10 * 60 * 1000,
  });
};
