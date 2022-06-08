import axiosInstance from 'axios';

const axios = axiosInstance.create({
  baseURL: 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/mv6pN2QvpearGQ9sNyBy/',
});

export default axios;
