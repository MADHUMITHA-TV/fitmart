import api from "./api";

const productService = {
  getAll: async () => {
    const response = await api.get("/products");
    return response.data.data;
  },

  getById: async (id) => {
    const response = await api.get(`/products/${id}`);
    return response.data.data;
  },

  search: async (keyword) => {
    const response = await api.get("/products/search", {
      params: { keyword },
    });
    return response.data.data;
  },

  getByCategory: async (categoryId) => {
    const response = await api.get(`/products/category/${categoryId}`);
    return response.data.data;
  },

  getByPrice: async (min, max) => {
    const response = await api.get("/products/price", {
      params: { min, max },
    });
    return response.data.data;
  },

  getPage: async (page, size, sortBy, direction) => {
    const response = await api.get("/products/page", {
      params: {
        page,
        size,
        sortBy,
        direction,
      },
    });

    return response.data.data;
  },
};

export default productService;