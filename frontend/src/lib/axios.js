import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development" ? "https://chat-application-backend-18mb.onrender.com" : "/api",
  withCredentials: true,
});
