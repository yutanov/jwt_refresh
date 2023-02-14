import axios from "axios";

const instance = axios.create({
  baseURL: "http://jwt.test:8090/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
