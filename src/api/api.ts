import axios from "axios";

const instance = axios.create({
  baseURL: "https://rickandmortyapi.com/api",
  timeout: 15000,
});

export default instance;
