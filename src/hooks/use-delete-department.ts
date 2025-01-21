import { useMutation } from "@tanstack/react-query"
import { deleteDepartment } from "@/api/department"

export function useDeleteDepartment() {
  return useMutation({
    mutationFn: deleteDepartment
  })
}
