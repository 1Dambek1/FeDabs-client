import { Group } from "@/types/user"
import { api } from "./api"
import { CreateGroupSchema } from "@/lib/schemas"

export async function getGroups(): Promise<Group[]> {
  const response = await api.get("/admin/groups/")

  return response.data
}

export async function createGroup(group: CreateGroupSchema) {
  const response = await api.post("/admin/groups/create/group", {
    title: group.title,
    department_id: group.departmentId
  })

  return response.data
}

export async function deleteGroup(id: number) {
  const response = await api.delete(`/admin/groups/delete/group/${id}`)

  return response.data
}
