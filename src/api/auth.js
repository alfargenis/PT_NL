import axios from './axios';

export const registerRequest = (user) => axios.post(`/register`, user);

export const loginRequest = (user) => axios.post(`/login`, user);

export const verifyTokenRequest = () => axios.get('/verify');

export const getUsersRequest = (page, count) =>
  axios.get(`/users?page=${page}&count=${count}`);

export const getUserByIdRequest = (id) => axios.get(`/users/${id}`);

export const updateUserRequest = (id, user) => axios.put(`/users/${id}`, user);

export const deleteUserRequest = (id) => axios.delete(`/users/${id}`);
