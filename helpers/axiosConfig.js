import axios from "axios";

const instance = axios.create({
  baseURL: "https://6592-88-203-206-207.ngrok.io/api",
});

export default instance;
