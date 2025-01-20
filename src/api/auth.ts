import api from "./api"

type Login = {
  email: string
  password: string
}

export async function login(credentials: Login) {
  const response = await api.post("/auth/login", credentials)
  return response.data
}

export const logout = () => {
  localStorage.removeItem("token")
}

export const fetchCurrentUser = async () => {
  const response = await api.get("/auth/me")
  return response.data
}
