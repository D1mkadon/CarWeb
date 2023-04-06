import axios from "axios";

const API_URL = "https://carserver-ke0p.onrender.com";
axios.defaults.baseURL = API_URL;

export const CarService = {
  async getAll() {
    const { data } = await axios.get("/cars");
    return data;
  },
  async getById(_id) {
    const { data } = await axios.get(`/cars`, { params: { id: _id } });
    return data[0];
  },
  async getUsers() {
    const { data } = await axios.get("/user");
    return data;
  },
};
