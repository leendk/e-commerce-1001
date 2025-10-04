import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.escuelajs.co/api/v1',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const productsApi = {
  getProducts: async (params = {}) => {
    const { offset = 0, limit = 10, categoryId } = params;
    const queryParams = new URLSearchParams({
      offset: offset.toString(),
      limit: limit.toString(),
    });

    if (categoryId) {
      queryParams.append('categoryId', categoryId.toString());
    }

    const response = await api.get(`/products?${queryParams.toString()}`);
    return response.data;
  },

  getCategories: async () => {
    const response = await api.get('/categories');
    return response.data;
  },
};

export default api;
