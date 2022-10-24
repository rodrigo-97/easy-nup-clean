import axios from "axios";
console.log(localStorage.getItem("APP_TOKEN"));
export const Axios = axios.create({
  baseURL: "http://localhost:3333/api",
  headers: {
    Authorization: JSON.parse(localStorage.getItem("APP_TOKEN") || "{}"),
  },
});
