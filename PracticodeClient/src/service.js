import axios from 'axios';

const apiClient = axios.create({
  baseURL:  "https://todolistserver-x4fm.onrender.com/"

})

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('An error occurred:', error);
    return Promise.reject(error);
  }
);

export default {
  getTasks: async () => {
    const result = await apiClient.get(`/items`)
    return result.data;
  },

  addTask: async (name) => {
    console.log('addTask', name)
    await apiClient.post(`/items`, { name: name, isComplete: false });
    return {};
  },

  setCompleted: async (id, isComplete) => {
    console.log('setCompleted', { id, isComplete })
    await apiClient.put(`/items/${id}`);
    return {};
  },

  deleteTask: async (id) => {
    console.log('deleteTask')
    await apiClient.delete(`/items/${id}`);

  }
};
