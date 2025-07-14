import axios from "axios";

export const authApi = axios.create({
  baseURL: "http://localhost:888/api/auth",
  headers: {
    'Content-Type': 'application/json'
  }
})