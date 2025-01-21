import { Role, User } from "@/types/user"
import { api } from "./api"

export type GetUserFilters = {
  role: Role
}

export async function getUsers(filters?: GetUserFilters): Promise<User[]> {
  const response = await api.get("/admin/users", {
    params: filters
  })

  return response.data
}
