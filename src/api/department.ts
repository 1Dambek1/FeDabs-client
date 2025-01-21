import type { Department } from "@/types/user"
import { api } from "./api"

export async function getDepartment(id: number): Promise<Department> {
  const response = await api.get(`/admin/departments/department/${id}`)
  return response.data
}
