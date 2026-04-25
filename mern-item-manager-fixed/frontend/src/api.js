import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api"
});

export const createItem = (item) => API.post("/items", item);
export const getItems = () => API.get("/items");
