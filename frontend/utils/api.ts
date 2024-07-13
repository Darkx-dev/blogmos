import Cookies from "js-cookie";
import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
  headers: {
    "Cache-Control": "no-cache",
  },
});

export const setAuthToken = (token: string | null) => {
  if (token) {
    // Set the Authorization header
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

    // Set the cookie
    Cookies.set("token", token, { expires: 7 }); // Expires in 7 days
  } else {
    // Remove the Authorization header
    delete api.defaults.headers.common["Authorization"];
  }
};

export default api;
