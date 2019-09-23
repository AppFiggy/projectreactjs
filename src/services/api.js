import axios from 'axios';

const api = axios.create({
  // endereço da api padronizada em todas as chamadas api
  baseURL: 'http://api.github.com',
});

export default api;
