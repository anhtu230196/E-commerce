import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5001/crown-shopping-5392d/us-central1/api",
});

export default instance;
