import axios from "axios"
import Cookies from "js-cookie"
import { TOKEN_NAME } from "./auth"

const api = axios.create({
  baseURL: "http://localhost:8000",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
    "Access-Control-Allow-Headers":
      "X-Requested-With, content-type, Authorization"
  }
})

api.interceptors.request.use(config => {
  const token = Cookies.get(TOKEN_NAME)

  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

export { api }
