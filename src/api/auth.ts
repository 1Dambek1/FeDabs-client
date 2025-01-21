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

export const fetchCurrentUser = async (): Promise<User> => {
  // await sleep(500)

  // return {
  //   id: 1,
  //   name: "John",
  //   surname: "Doe",
  //   email: "john@doe.com",
  //   role: Role.Student,
  //   dob: new Date()
  // }

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


export const UpdateCurrentUser = async (data:{
  name: string,
  surname:string,
  email: string,
  dob: Date,
}) => {
  const response = await api.put("/auth/update/me", data)
  return response.data
}