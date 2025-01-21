import { type User } from "@/types/user"
import { api } from "./api"

type Login = {
  email: string
  password: string
}

type LoginResponse = User & {
  accessToken: string
}

export async function login(credentials: Login) {
  const response = await api.post<LoginResponse>("/auth/login", credentials)
  return response.data
}

export const logout = () => {
  localStorage.removeItem("token")
}

export const fetchCurrentUser = async () => {
  const response = await api.get<User>("/auth/me")
  return response.data
}
