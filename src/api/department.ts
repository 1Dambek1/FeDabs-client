import type { Department } from "@/types/user"
import { api } from "./api"

export async function getDepartments(): Promise<Department[]> {
  const response = await api.get<Department[]>("/admin/departments/")
  return response.data
}

export async function getDepartment(id: number): Promise<Department> {
  const response = await api.get<Department>(
    `/admin/departments/department/${id}`
  )
  return response.data
}

export async function createDepartment(data: {
  title: string
  head_id: number
}) {
  const response = await api.post<Department>("/admin/departments/create", data)

  return response.data
}

export async function deleteDepartment(id: number) {
  const response = await api.delete<Department>(
    `/admin/departments/delete/department/${id}`
  )

  return response.data
}
