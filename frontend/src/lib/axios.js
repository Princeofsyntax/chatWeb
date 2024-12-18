// import axios from "axios";

// export const axiosInstance = axios.create({
//   baseURL: "https://quick-chat-1-4iq0.onrender.com/api",
//   withCredentials: true,
// });
import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development" ? "http://localhost:5001/api" : "https://quick-chat-2byme.onrender.com/api",
  withCredentials: true,
});
