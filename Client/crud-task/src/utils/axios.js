import axios from "axios";
const instance = axios.create({
  baseURL: "https://crud-task-rl73.vercel.app/",

  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
