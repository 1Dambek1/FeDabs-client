import Cookies from "js-cookie"
import { type User } from "@/types/user"
import { api } from "./api"
import { type LoginSchema } from "@/lib/schemas"

type LoginResponse = User & {
  token: string
}

export const TOKEN_NAME = "token"

export async function login(data: LoginSchema) {
  const response = await api.post<LoginResponse>("/auth/login", data)

  saveTokenStorage(response.data.token)

  return response.data
}

export const logout = () => {
  removeFromStorage()
}

export const fetchCurrentUser = async () => {
  const response = await api.get<User>("/auth/me")
  return response.data
}

export const getToken = () => Cookies.get(TOKEN_NAME)

export const saveTokenStorage = (token: string) => {
  Cookies.set(TOKEN_NAME, token, {
    domain: "localhost",
    sameSite: "strict",
    expires: 1
  })
}

export const removeFromStorage = () => Cookies.remove(TOKEN_NAME)
