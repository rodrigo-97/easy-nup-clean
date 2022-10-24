import axios from "axios";
export const Axios = axios.create({
  baseURL: "http://localhost:3333/api",
  headers: {
    Authorization: JSON.parse(localStorage.getItem("APP_TOKEN") || "{}"),
  },
});
