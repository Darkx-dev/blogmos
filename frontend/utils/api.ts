import Cookies from "js-cookie";
import axios from "axios";
import { cookies } from "next/headers";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
  headers: {
    "Cache-Control": "no-cache",
  },
});

export const setAuthToken = (token: string | null) => {
  if (token) {
    // Set the cookie
    Cookies.set("token", token, { expires: 7 }); // Expires in 7 days
    
    // Set the Authorization header
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

  } else {
    // Remove the Authorization header
    delete api.defaults.headers.common["Authorization"];
  }
};

export default api;
