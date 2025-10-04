import { useQuery } from '@tanstack/react-query';
import { productsApi } from '../../../../../shared/services/api';

export const useProducts = (params = {}) => {
  return useQuery({
    queryKey: ['bestSelling', params],
    queryFn: () => productsApi.getProducts(params),
    staleTime: 5 * 60 * 1000,
  });
};
