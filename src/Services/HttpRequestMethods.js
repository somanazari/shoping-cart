import axios from "axios";

axios.defaults.baseURL = "http://localhost:5000/api";

export const signupUser = (data) => {
  return axios.post("/user/register", data);
};

export const loginUser = (data) => {
  return axios.post("/user/login", data);
};

// export const deleteRequest = (id) => axios.delete(`${id}`);
// export const getRequest = () => axios.get();
// export const getSingleRequest = (id) => axios.get(`${id}`);
// export const addRequest = (contact) => axios.post("", contact);
// export const updateRequest = (id, contact) => axios.put(`${id}`, contact);
