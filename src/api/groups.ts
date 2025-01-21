import { api } from "./api"

export async function deleteGroup(id: number) {
  const response = await api.delete(`/admin/groups/delete/group/${id}`)

  return response.data
}
